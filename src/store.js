import { configureStore } from "@reduxjs/toolkit";
import shortlistReducer from "./features/LastFm/shortlistSlice";
import favouriteReducer from "./features/Favourite/favouriteSlice";
export default configureStore({
  reducer: {
    shortlist: shortlistReducer,
    favourite: favouriteReducer,
  },
});
