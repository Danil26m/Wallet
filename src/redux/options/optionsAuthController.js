import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://wallet.goit.ua";

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset(){
    axios.defaults.headers.common.Authorization = '';
  }
}
export const signIn = createAsyncThunk(
"auth/signIn",
async(value,thunkAPI)=>{
    try {
        const response = await axios.post("/api/auth/sign-in",value);
        token.set(response.data.token);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
}
)
export const signUp = createAsyncThunk(
"auth/signUp",
async(value,thunkAPI)=>{
    try {
        const response = await axios.post("/api/auth/sign-up",value);
        token.set(response.data.token);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
}
)
// export const exit = createAsyncThunk(
// "auth/signOut",
// async(_,thunkAPI)=>{
//     try {
//       await axios.delete('/api/auth/sign-out');
//       token.unset();
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
// }
// )