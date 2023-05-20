import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6460b470ca2d89f7e75d061e.mockapi.io';

export const getUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/users`);
      if (data.statusText === 'OK') {
        return await data.json();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'users/follow',
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      await fetch(`${BASE_URL}/users/${userData.id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ isFollowing: !userData.isFollowing }),
      });

      const data = await fetch(`${BASE_URL}/users`);
      if (data.statusText === 'OK') {
        return await data.json();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
