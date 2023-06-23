import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
//import { string } from "yup";

interface RegistrationInfo {
  name: string;
  email: string;
  phone: string;
  plan: string;
  price: string;
  ads: Array<string>;
}

type RegistrationInfoKeys = keyof RegistrationInfo;

const initialState: RegistrationInfo = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  price: "",
  ads: [],
};

const registrationInfoSlice = createSlice({
  name: "registrationInfo",
  initialState,
  reducers: {
    updateRegistrationInfo: (
      state,
      action: PayloadAction<{
        value: string | Array<string>;
        property: RegistrationInfoKeys;
      }>
    ) => {
      //state[action.payload.property] = action.payload.value;
      if (action.payload.property === "ads") {
        state[action.payload.property] = action.payload.value as string[];
      } else {
        state[action.payload.property] = action.payload.value as string;
      }
    },
    updateLocal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateRegistrationInfo, updateLocal } =
  registrationInfoSlice.actions;

export default registrationInfoSlice.reducer;

//const { property, value } = action.payload;
//state[property] = value;
