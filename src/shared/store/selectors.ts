import { createSelector } from '@reduxjs/toolkit/react';
import type { RootState } from './store';

const selectQuests = (state: RootState) => state.quest.quests;

export const selectActiveQuests = createSelector([selectQuests], (quests) =>
    quests.filter((quest) => quest.status === 'active')
);
