import { createSelector } from '@reduxjs/toolkit';

// tüm contacts al
export const selectContacts = state => state.contacts.items;

// filtre  al
export const selectNameFilter = state => state.filters.value;

// filtrelenmiş contacts al ve memoize ediliyooo
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
