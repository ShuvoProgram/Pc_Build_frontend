import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    processor: {},
    motherboard: {},
    ram: {},
    psu: {},
    storage: {},
    monitor: {}
};

const pcBuilderSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handlePcBuild: (state, action) => {
            const { category, ...productData } = action.payload;
            if (category === "processor") {
                state.processor = productData
            } else if (category === "motherboard") {
                state.motherboard = productData;
            } else if (category === "ram") {
                state.ram = productData;
            } else if (category === "psu") {
                state.psu = productData;
            } else if (category === "storage") {
                state.storage = productData;
            } else if (category === "monitor") {
                state.monitor = productData;
            }
        },
        addProduct: (state, action) => {
            state.product.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.product = state.product.filter((data) => data._id !== action.payload)
        },
        resetProduct: (state, action) => {
            state.product = []
        }
    }
})

export const { handlePcBuild, addProduct, removeProduct, resetProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;