import { createSlice } from "@reduxjs/toolkit";
import PhoneBook from '../components/PhoneBook.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: PhoneBook,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;

