// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 QUEST ITEM - Single Quest Item */

interface Props {
    className?: string;
}

const QB_QuestItem: React.FC<Props> = ({ className }) => {
    return <div className={twMerge('', className)}>QB_QuestItem</div>;
};

export default QB_QuestItem;
