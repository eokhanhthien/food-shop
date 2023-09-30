import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface userSlice {
  info: any,
  access_token : any
  isLogin : any,
}

const initialState  = {
  info: null,
  access_token : null,
  isLogin : false,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userSlice['info']>) => {
      state.info = action.payload;
    },

    setAccessToken: (state, action: PayloadAction<userSlice['access_token']>) => {
      state.access_token = action.payload;
    },

    setIsLogin: (state, action: PayloadAction<userSlice['access_token']>) => {
      console.log(action.payload);
      state.isLogin = action.payload;
    },

  },
})



// Action creators are generated for each case reducer function
export const { setUser,setAccessToken,setIsLogin } = counterSlice.actions

export default counterSlice.reducer