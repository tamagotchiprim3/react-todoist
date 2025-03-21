import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter/counter-state';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;