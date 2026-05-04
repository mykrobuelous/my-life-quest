import type { QuestType } from '@/collection/data/questData';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';
import type { RootState } from '../store';

type InitialState = {
    quests: QuestType[];
};

const initialState: InitialState = {
    quests: [],
};

const questReducer = createSlice({
    name: 'quest',
    initialState,
    reducers: {
        initQuests: (state, action: PayloadAction<QuestType[]>) => {
            state.quests = action.payload;
        },
    },
});

export const questState = (state: RootState) => state.quest;
export const { initQuests } = questReducer.actions;
export default questReducer.reducer;
