import { useAppDispatch } from "../../hooks/dispatch";
import { useAppSelector } from "../../hooks/selector";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import SubmitButton from "../buttons/SubmitButton";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { fetchWarehouses } from "../../api/warehousesApi";
import { cleanWarehouses } from "../../store/reducers/warehousesReducer";

interface ISearchParams {
  cityName: string;
  warehouseType: string;
}

export default function WarehousesSearchForm() {
  const dispatch = useAppDispatch();
  const { warehousesTypes } = useAppSelector((state) => state.warehousesTypes);

  const { control, handleSubmit, reset } = useForm<ISearchParams>();

  const onFormSubmit: SubmitHandler<ISearchParams> = (data) => {
    dispatch(cleanWarehouses());
    reset({ cityName: "", warehouseType: "" });
    dispatch(fetchWarehouses([data.cityName.trim(), data.warehouseType]));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      autoComplete="off"
      sx={{
        display: "flex",
        gap: { xs: "10px", md: "20px" },
        width: { xs: "100%", md: "90%" },
        margin: "0 auto 20px auto",
      }}
    >
      <Controller
        name="cityName"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({
          field: { ref, value, onChange },
          formState: { errors },
        }) => (
          <FormControl>
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="Населений пункт"
              variant="outlined"
              type="text"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "6px",
                minWidth: "100px",
                "& input": { color: "secondary.main" },
                "& label ": { color: "secondary.main" },
              }}
              error={!!errors.cityName}
              aria-describedby="error-helper-text"
            />
            {errors.cityName?.type === "required" && (
              <FormHelperText error id="error-helper-text">
                Ви не ввели назву міста!
              </FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="warehouseType"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({
          field: { ref, value, onChange },
          formState: { errors },
        }) => (
          <FormControl
            sx={{
              "& svg": { color: "primary.main" },
              "& label": { color: "secondary.main" },
              "& div": { color: "secondary.main" },
            }}
          >
            <InputLabel id="select-label">Тип відділення</InputLabel>
            <Select
              labelId="select-label"
              inputRef={ref}
              value={value}
              label="Тип відділення"
              onChange={onChange}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "6px",
                minWidth: "200px",
              }}
              error={!!errors.warehouseType}
              aria-describedby="select-helper-text"
            >
              {warehousesTypes?.map((type) => (
                <MenuItem
                  key={type.Description}
                  value={type.Ref}
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  {type.Description}
                </MenuItem>
              ))}
            </Select>
            {errors.warehouseType?.type === "required" && (
              <FormHelperText error id="select-helper-text">
                Ви не ввели назву міста!
              </FormHelperText>
            )}
          </FormControl>
        )}
      />

      <SubmitButton buttonName="Знайти" />
    </Box>
  );
}
