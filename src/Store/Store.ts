import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slice/AuthSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { AuthInterface } from '../Interface/User'
export interface RootState {
    auth: {
        userInfo: AuthInterface
    }
    // post:{
    //     myPosts:[]
    //     savedPosts:[]
    //     newPost:[]
    //     loadedPosts:[]
    //     lastPost:{}
    // }
    // connections:{
    //     followers :[]
    //     followings : FollowingsInterface[]
    // }
}

const rootReducer = combineReducers({
    auth: authReducer,
  
});

const store=configureStore({
    reducer:rootReducer
})
export default store