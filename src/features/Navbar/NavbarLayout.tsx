// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import NB_NavbarItem from './components/NB_NavbarItem';
import { ChartNoAxesColumn, ScrollText, Users } from 'lucide-react';

/* ===================================================================== */
/*🧩 NAVBAR LAYOUT - Layout of the navbar located above */

interface Props {
    className?: string;
}

const NavbarLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex items-center justify-evenly', 'border-b py-3', className)}>
            <NB_NavbarItem Icon={ScrollText} label="Quests" />
            <NB_NavbarItem Icon={ChartNoAxesColumn} label="Completed" />
            <NB_NavbarItem Icon={Users} label="Character" />
        </div>
    );
};

export default NavbarLayout;
