import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FIREBASE_REALTIME_DB_URL } from '../constants';
import { extractErrorMessage } from '../utils';

const initialState = {
  data: [],
  isLoading: false,
};

export const getStock = createAsyncThunk('stock/getStock', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/stock.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    const stock = Object.keys(result).map((key) => ({
      ...result[key],
      id: key,
    }));

    return stock;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const saveStockItem = createAsyncThunk(
  'stock/saveStockItem',
  async (stockItem, thunkAPI) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/stock.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: stockItem.name,
          quantity: stockItem.quantity,
          expiration: stockItem.expiration,
        }),
      });
      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const deleteStockItem = createAsyncThunk('stock/deleteStockItem', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/stock/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveStockItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveStockItem.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(saveStockItem.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getStock.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteStockItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStockItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteStockItem.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default stockSlice.reducer;
