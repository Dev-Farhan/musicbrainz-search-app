import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavourite: (state) => {
      state.items = [];
    },
  },
});

export const { addToFavourite, removeFromFavourite, clearFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
