// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 NAVBAR ITEM - Navbar Item with Icon and label */

interface Props {
    className?: string;
    Icon: LucideIcon;
    label: string;
}

const NB_NavbarItem: React.FC<Props> = ({ className, Icon, label }) => {
    return (
        <div
            className={twMerge(
                'flex flex-col items-center gap-1',
                'group cursor-pointer',
                className
            )}
        >
            <Icon className="h-6 w-6 group-hover:text-slate-600" />
            <p className="text-sm group-hover:text-slate-600">{label}</p>
        </div>
    );
};

export default NB_NavbarItem;
