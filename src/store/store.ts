import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

type CartItem = {
  name: string;
};

// Define the initial state of the cart
const initialState = {
  cart: [] as CartItem[],
};

// Create a cart slice using `createSlice`
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload;
    },
  },
});

export const { addItem, setCart } = cartSlice.actions;

// Combine reducers if you have more slices
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

// Setup Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);

// Set up the BroadcastChannel to communicate between tabs
const broadcastChannel = new BroadcastChannel('cart_channel');

// Implement a lock to prevent race conditions
let isUpdating = false;

broadcastChannel.onmessage = async (event) => {
  if (event.data.type === 'SYNC_CART' && !isUpdating) {
    isUpdating = true;
    try {
      store.dispatch(setCart(event.data.payload));
    } finally {
      isUpdating = false;
    }
  }
};

// Subscribe to store changes to broadcast state updates
store.subscribe(() => {
  if (!isUpdating) {
    const state = store.getState();
    broadcastChannel.postMessage({ type: 'SYNC_CART', payload: state.cart.cart });
  }
});

// Export the RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
