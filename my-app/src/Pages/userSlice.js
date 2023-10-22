// // userSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define an initial state for the user data
// const initialState = {
//   user: null,
//   loading: 'idle',
//   error: null,
// };

// // Create an async thunk action to fetch user data
// export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
//   console.log(data,'datttttttttttt123')
//   // Make your API GET request here
//   const response = await fetch('http://localhost:5000/api/users'); // Full URL to the server
//  // Replace with your API endpoint
//   const data = await response.json();
//   // console.log(data,'datttttttttttt123')
//   return data;
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     // Additional synchronous actions can be defined here
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = 'pending';
//       })
//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = 'fulfilled';
//         state.user = action.payload;
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = 'rejected';
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;
