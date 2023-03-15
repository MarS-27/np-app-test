import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { IWarehouses } from "../models/interfaces";

const NP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWarehouses = createAsyncThunk<
  IWarehouses,
  string[],
  { rejectValue: string }
>("warehouses/fetchWarehouses", async (args, { rejectWithValue }) => {
  const [city, typeOFWarehouse] = args;

  try {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
        TypeOfWarehouseRef: typeOFWarehouse,
      },
    });

    if (response.data.success) {
      return response.data.data.map((elem: Record<string, any>) => {
        return {
          description: elem.Description,
        };
      });
    } else {
      return response.data.errors[0];
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
