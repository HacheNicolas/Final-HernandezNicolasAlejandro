import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FIREBASE_REALTIME_DB_URL } from '../constants';
import { extractErrorMessage } from '../utils';

const initialState = {
  data: [],
  selectedType: null,
  filteredOrders: [],
  selected: null,
  isLoading: false,
};

export const selectOrdersType = createAsyncThunk(
  'orders/selectOrdersType',
  async (orderType, thunkAPI) => {
    try {
      const result = await state.data.find((order) => order.orderType === orderType);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const filterOrders = createAsyncThunk('orders/filterOrders', async (orderType, thunkAPI) => {
  try {
    const result = await state.data.filter((order) => order.orderType === orderType);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const getOrder = createAsyncThunk('orders/getOrder', async (searchId, thunkAPI) => {
  try {
    const result = await state.data.find((order) => order.id === searchId);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const saveOrder = createAsyncThunk('stock/saveOrder', async (order, thunkAPI) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderType: order.orderType,
        orderState: 'Pendiente',
        description: order.description,
        amount: order.amount,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const getOrders = createAsyncThunk('stock/getOrder', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    const orders = Object.keys(result).map((key) => ({
      ...result[key],
      id: key,
    }));

    return orders;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const updateOrderState = createAsyncThunk(
  'stock/updateOrderState',
  async (order, thunkAPI) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders/${order.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: order.id,
          orderType: order.orderType,
          orderState: order.orderState,
          description: order.description,
          amount: order.amount,
        }),
      });
      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(saveOrder.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateOrderState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderState.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateOrderState.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(selectOrdersType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(selectOrdersType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedType(action.payload);
      })
      .addCase(selectOrdersType.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(filterOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredOrders(action.payload);
      })
      .addCase(filterOrders.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selected(action.payload);
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default ordersSlice.reducer;
