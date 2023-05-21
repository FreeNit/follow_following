import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = new URL('https://6460b470ca2d89f7e75d061e.mockapi.io/users');
// BASE_URL.searchParams.append('isFollowing', false);
// BASE_URL.searchParams.append('page', 1);
// BASE_URL.searchParams.append('limit', 3);

const BASE_URL_PUT = new URL(
  'https://6460b470ca2d89f7e75d061e.mockapi.io/users'
);

export const getUsers = createAsyncThunk(
  'users/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}?page=${page}&limit=3`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
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
    const followers = !userData.isFollowing
      ? userData.followers + 1
      : userData.followers - 1;

    try {
      await fetch(`${BASE_URL_PUT}/${userData.id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          isFollowing: !userData.isFollowing,
          followers: followers,
        }),
      });

      // const data = await fetch(`${BASE_URL}`);
      // if (data.statusText === 'OK') {
      //   return await data.json();
      // }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
