import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, exit } from 'redux/options/optionsAuthController';
const auth = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        token: '',
        isAuth: false,
    },
    extraReducers:{
        [signIn.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [signUp.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [exit.fulfilled](state,action){
            state.user = {};
            state.token = null;
            state.isAuth = false;
            console.log(action.payload);
        }

    }
})
export default auth.reducer;