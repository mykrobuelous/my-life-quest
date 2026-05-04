// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button';
import { twMerge } from 'tailwind-merge';
import QB_QuestList from './containers/QB_QuestList';

/* ===================================================================== */
/*🧩 QUESTBOARD LAYOUT - Where the questboard is located */

interface Props {
    className?: string;
}

const QuestBoardLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex flex-col gap-4', 'px-6 py-4', className)}>
            <Button label="+ Add Quest" />
            <QB_QuestList className="box flex-1" />
        </div>
    );
};

export default QuestBoardLayout;
