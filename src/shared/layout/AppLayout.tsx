// 📦 LIBRARIES IMPORT
import { BrowserRouter, Route, Routes } from 'react-router';
import MobileLayout from './MobileLayout';
import QuestBoardLayout from '@/features/QuestBoard/QuestBoardLayout';

/* ===================================================================== */
/*🧩 APP LAYOUT - Where routes live */

const AppLayout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MobileLayout />}>
                    <Route path="/*" element={<QuestBoardLayout className="flex-1" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppLayout;
