import { createSelector } from '@reduxjs/toolkit';

// tüm kontakları al
export const selectContacts = state => state.contacts.items;

// filtre değerini al
export const selectNameFilter = state => state.filters.value;

// filtrelenmiş kontakları al (memoize edilmiş)
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);
