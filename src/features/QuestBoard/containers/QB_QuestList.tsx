// 📦 LIBRARIES IMPORT
import { questState } from '@/shared/store/reducer/questReducer';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 QUESTLIST - List of quest */

interface Props {
    className?: string;
}

const QB_QuestList: React.FC<Props> = ({ className }) => {
    const { quests: questData } = useAppSelector(questState);
    console.log(questData);

    return <div className={twMerge('', className)}></div>;
};

export default QB_QuestList;
