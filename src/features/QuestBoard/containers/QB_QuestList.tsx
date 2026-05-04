// 📦 LIBRARIES IMPORT
import { selectActiveQuests } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import QB_QuestItem from '../components/QB_QuestItem';

/* ===================================================================== */
/*🧩 QUESTLIST - List of quest */

interface Props {
    className?: string;
}

const QB_QuestList: React.FC<Props> = ({ className }) => {
    const activeQuestData = useAppSelector(selectActiveQuests);

    return (
        <div className={twMerge('flex flex-col gap-4', 'overflow-y-scroll', className)}>
            {activeQuestData.map((questItem) => (
                <QB_QuestItem key={questItem.id} />
            ))}
        </div>
    );
};

export default QB_QuestList;
