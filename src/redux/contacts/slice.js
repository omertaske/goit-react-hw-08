import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logout } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearContacts: state => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    // fetch
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // add
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // delete
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    });

    // update
    builder.addCase(updateContact.fulfilled, (state, action) => {
      const idx = state.items.findIndex(c => c.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx] = action.payload;
      }
    });

    // logout -> tüm contactları temizle
    builder.addCase(logout.fulfilled, state => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { clearContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
