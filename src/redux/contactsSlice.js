import { createSlice } from '@reduxjs/toolkit';

import { getUsers, followUser } from './operations';

const contactsInitialState = {
  users: [],
  isLoading: false,
  error: null,
  page: 1,
};

const usersSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    increasePage(state, action) {
      return {
        ...state,
        page: action.payload,
      };
    },
  },
  extraReducers: {
    [getUsers.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [getUsers.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        users: [...state.users, ...action.payload],
      };
    },
    [getUsers.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [followUser.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [followUser.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        users: action.payload,
      };
    },
    [followUser.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { increasePage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
