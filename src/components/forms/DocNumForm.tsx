import { useAppDispatch } from "../../hooks/dispatch";
import { useAppSelector } from "../../hooks/selector";
import { fetchTracking } from "../../api/trackingApi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SubmitButton from "../buttons/SubmitButton";
import { SubmitHandler, useForm, useController } from "react-hook-form";
import { IDocumentNumber } from "../../models/interfaces";
import { cleanTracking } from "../../store/reducers/trackingReducer";
import { FormHelperText } from "@mui/material";
import { TTN_CHECK_PATTERN } from "../../constants/constants";
import { useEffect } from "react";

export default function DocumentNumberForm() {
  const dispatch = useAppDispatch();
  const { tracking } = useAppSelector((state) => state.tracking);

  const { control, handleSubmit } = useForm<IDocumentNumber>();
  const {
    field: { ref, value, onChange },
    formState: { errors },
  } = useController({
    name: "docNumber",
    control,
    rules: { pattern: TTN_CHECK_PATTERN },
    defaultValue: "",
  });
  console.log(tracking?.number);

  const onFormSubmit: SubmitHandler<IDocumentNumber> = (data) => {
    dispatch(cleanTracking());
    // onChange("");
    dispatch(fetchTracking(data.docNumber));
  };

  useEffect(() => {
    onChange(tracking?.number);
  }, [tracking?.number]);

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
      <Box>
        <TextField
          inputRef={ref}
          value={value}
          onChange={onChange}
          id="outlined-basic"
          className="search-input"
          label="Номер ТТН"
          variant="outlined"
          type="text"
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "6px",
          }}
          error={!!errors.docNumber}
          aria-describedby="error-helper-text"
        />
        {errors.docNumber?.type === "pattern" && (
          <FormHelperText error id="error-helper-text">
            Має містити 14 цифр!
          </FormHelperText>
        )}
      </Box>

      <SubmitButton buttonName="Статус ТТН" />
    </Box>
  );
}
