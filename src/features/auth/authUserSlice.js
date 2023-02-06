import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FAILED, LOADING, LOGIN_API, SUCCESS } from '../../apis'
import axios from 'axios'


export const login = createAsyncThunk('auth/login', async (formValues) => {
  console.log("from slice",formValues.email)
  const response = await axios.post(LOGIN_API,
    { email: formValues.email, password: formValues.password },
    { headers: { 'Content-Type': 'application/json' } })

  console.log(response.data)
  // console.log(email, password, "pass")
  return response.data
})

const initialState = {

  accessToken: localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null,
  refreshToken: localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null,
  loginStatus: null,
  loginError: null,

}


const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
      state.username = action.payload.username

    },
    setCredentials: (state, action) => {
      const { access, refresh } = action.payload
      state.accessToken = access
      state.refreshToken = refresh

    },

    logout: (state, action) => {
      state.userInfo = null
      state.accessToken = null
      state.refreshToken = null
      state.loginStatus = null
      state.loginError = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

    },

    setLoginStatusToNull: (state, action) => {
      state.loginStatus = null
      state.loginError = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loginStatus = LOADING
      })
      .addCase(login.fulfilled, (state, action) => {
        //const { access, refresh, username } = action.payload
        state.loginStatus = SUCCESS
        state.accessToken = action.payload.access
        state.refreshToken = action.payload.refresh

        localStorage.setItem('accessToken', JSON.stringify(action.payload.access))
        localStorage.setItem('refreshToken', JSON.stringify(action.payload.refresh))

      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = FAILED
        state.loginError = action.error.message
      })
  }
});

export const { setCredentials, setLoginStatusToNull, setUserInfo, logout } = authUserSlice.actions

export const getLoginInStatus = (state) => state.auth.loginStatus;
export const getLoginInError = (state) => state.auth.loginError;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectUserInfo = (state) => state.auth.userInfo;

export default authUserSlice.reducer