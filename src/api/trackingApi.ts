import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { ITracking } from "../models/interfaces";

const NP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTracking = createAsyncThunk<
  ITracking,
  string,
  { rejectValue: string }
>("tracking/fetchTracking", async (documentNumber, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, {
      apiKey: NP_API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: documentNumber,
          },
        ],
      },
    });

    if (!response.data.success) {
      return response.data.errors[0];
    } else if (response.data.data[0].Status === "Номер не найден") {
      return "Номер посилки не знайдено";
    } else {
      localStorage.setItem(
        response.data.data[0].Number,
        response.data.data[0].Number
      );

      return {
        number: response.data.data[0].Number,
        status: response.data.data[0].Status,
        cityRecipient: response.data.data[0].CityRecipient,
        warehouseRecipient: response.data.data[0].WarehouseRecipient,
        citySender: response.data.data[0].CitySender,
        warehouseSender: response.data.data[0].WarehouseSender,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
