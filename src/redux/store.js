import { configureStore } from "@reduxjs/toolkit";
import pcBuilderSlice from "./features/pcBuilderSlice";

export default configureStore({
    reducer: {
        pcBuild: pcBuilderSlice,
    }
})