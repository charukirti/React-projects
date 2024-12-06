import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/apiProducts";

const initialState = {
    items: [],
    status: 'idle',
    errorMessage: '',
};

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetchProducts();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.items = action.payload;
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.status = 'failed',
                    state.errorMessage = action.payload;
            });
    }
});

export default productSlice.reducer;