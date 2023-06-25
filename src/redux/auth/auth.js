import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp} from 'redux/options/optionsAuthController';
const auth = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        token: '',
        isAuth: false,
    },
    reducers:{
        signOut(state){
            state.user = {};
            state.token = null;
            state.isAuth = false;
        }
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
        }
    }
})
export const { signOut } = auth.actions;
export default auth.reducer;