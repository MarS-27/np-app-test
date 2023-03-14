import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/constants";
// import { ITracking } from "../models/interfaces";

const NP_API_KEY = process.env.REACT_APP_API_KEY;

// export const fetchWarehouses = createAsyncThunk<
//   //   ITracking,
//   string,
//   { rejectValue: string }
// >("warehouses/fetchWarehouses", async (cityName, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(API_URL, {
//       apiKey: NP_API_KEY,
//       modelName: "TrackingDocument",
//       calledMethod: "Address",
//       methodProperties: {
//         CityName: cityName,
//         Page: "1",
//         Limit: "50",
//       },
//     });

//     if (response.data.success) {
//       return response.data;
//     } else {
//       return response.data.errors[0];
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       return rejectWithValue(error.message);
//     }
//   }
// });

export const test = async (cityName: string) => {
  const response = await axios.post(API_URL, {
    apiKey: NP_API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: cityName,
      Page: "1",
      Limit: "490",
    },
  });

  if (response.data.success) {
    return response.data.data[0];
  } else {
    return response.data.errors[0];
  }
};
