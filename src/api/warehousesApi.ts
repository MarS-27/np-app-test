import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, WAREHOUSES_ON_PAGE } from "../constants/constants";
import { IWarehouses } from "../models/interfaces";

const NP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWarehouses = createAsyncThunk<
  IWarehouses,
  string[],
  { rejectValue: string }
>("warehouses/fetchWarehouses", async (args, { rejectWithValue }) => {
  const [city, typeOFWarehouse, pageNum] = args;

  try {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
        TypeOfWarehouseRef: typeOFWarehouse,
        Page: pageNum,
        Limit: WAREHOUSES_ON_PAGE,
      },
    });

    if (!response.data.success) {
      return response.data.errors[0];
    } else if (!response.data.data.length) {
      return "У населеному пункті вказаний тип відділень не знайдено";
    } else {
      const description = response.data.data.map(
        (elem: Record<string, any>) => {
          return {
            description: elem.Description,
          };
        }
      );

      return {
        city: city,
        type: typeOFWarehouse,
        totalCount: response.data.info.totalCount,
        data: description,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
