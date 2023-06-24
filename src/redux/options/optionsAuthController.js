import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://wallet.goit.ua";
export const signIn = createAsyncThunk(
"auth/signIn",
async(value,thunkAPI)=>{
    try {
        const response = await axios.post("/api/auth/sign-in",value);
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
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
}
)
export const exit = createAsyncThunk(
"auth/signOut",
async(_,thunkAPI)=>{
    try {
        const response = await axios.delete("/api/auth/sign-out");
        
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
}
)