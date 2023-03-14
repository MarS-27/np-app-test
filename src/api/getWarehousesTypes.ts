import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { IWarehousesTypes } from "../models/interfaces";

const NP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWarehousesTypes = createAsyncThunk<
  IWarehousesTypes,
  undefined,
  { rejectValue: string }
>("warehousesTypes/fetchWarehousesTypes", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouseTypes",
      methodProperties: {},
    });

    if (response.data.success) {
      return response.data.data.map((elem: IWarehousesTypes) => {
        return {
          Ref: elem.Ref,
          Description: elem.Description,
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
