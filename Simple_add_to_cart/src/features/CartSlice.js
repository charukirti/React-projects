import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // cart: [],

    cart: [

    ]

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // check item exists or not 
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            //if yes then increase quantity

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            } else {
                // if not then push item in cart
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
            }
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        increaseItemQuantity(state, action) {
            // find item in cart

            const item = state.cart.find(item => item.id === action.payload);

            if (item) {
                //if found increase quantity

                item.quantity++;

                // also increase totoal price

                item.totalPrice = item.price * item.quantity;
            }
        },
        decreaseItemQuantity(state, action) {
            // find item in cart

            const item = state.cart.find(item => item.id === action.payload);

            if (item) {
                if (item.quantity > 1) {
                    //if found increase quantity

                    item.quantity--;

                    // also increase totoal price

                    item.totalPrice = item.price * item.quantity;
                } else {
                    cartSlice.caseReducers.deleteItem(state, action);
                }
            }
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;


export default cartSlice.reducer;


// Selectors
export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find(item => item.id === id)?.quantity ?? 0;