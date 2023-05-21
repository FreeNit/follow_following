import { createSlice } from '@reduxjs/toolkit';

import { getUsers, followUser, loadMoreUsers } from './operations';

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
    clearState(state, action) {
      return {
        ...state,
        users: [],
      };
    },
    increasePage(state, action) {
      return {
        ...state,
        page: action.payload,
      };
    },
    followUserStatus(state, action) {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload
            ? {
                ...user,
                isFollowing: !user.isFollowing,
                followers: !user.isFollowing
                  ? user.followers + 1
                  : user.followers - 1,
              }
            : user
        ),
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
        users: [...action.payload],
      };
    },
    [getUsers.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loadMoreUsers.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loadMoreUsers.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        users: [...state.users, ...action.payload],
      };
    },
    [loadMoreUsers.rejected](state, action) {
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

export const { increasePage, followUserStatus, clearState } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
