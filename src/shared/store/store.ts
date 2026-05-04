import { configureStore } from '@reduxjs/toolkit/react';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import questReducer, { initQuests } from './reducer/questReducer';
import { questData } from '@/collection/data/questData';

const store = configureStore({
    reducer: {
        quest: questReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

store.dispatch(initQuests(questData));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
