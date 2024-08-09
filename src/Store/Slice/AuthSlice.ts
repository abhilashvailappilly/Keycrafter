import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    // userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : null,
    userInfo: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo') as string) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log("dispatched worked :",action.payload)
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
            Cookies.set('userInfo', JSON.stringify(action.payload), { expires: 7, secure: true, sameSite: 'Strict' })
        },
        logout: (state) => { 
            state.userInfo = null
            localStorage.removeItem('userInfo')
            localStorage.removeItem('userToken')
            Cookies.remove('userInfo')
            Cookies.remove('userToken')
        },
       
    }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer