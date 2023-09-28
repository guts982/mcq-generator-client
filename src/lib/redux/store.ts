import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import { mcqApi } from './slices/mcqApi';



export const store = configureStore({
    reducer: {
        global:globalReducer,
        [mcqApi.reducerPath]:mcqApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(mcqApi.middleware);
    }
});




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


