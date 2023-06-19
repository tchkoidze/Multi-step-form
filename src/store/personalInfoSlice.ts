import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

type PersonalInfoKeys = keyof PersonalInfo;

const initialState: PersonalInfo = {
  name: "",
  email: "",
  phone: "",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updatePersonalInfo: (
      state,
      action: PayloadAction<{ value: string; property: PersonalInfoKeys }>
    ) => {
      state[action.payload.property] = action.payload.value;
    },
  },
});

export const { updatePersonalInfo } = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
