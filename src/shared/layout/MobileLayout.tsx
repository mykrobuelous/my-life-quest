// 📦 LIBRARIES IMPORT
import NavbarLayout from '@/features/Navbar/NavbarLayout';
import { Outlet } from 'react-router';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 MOBILE LAYOUT - Setup the layout of mobile setup */

interface Props {
    className?: string;
}

const MobileLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex-center view-screen bg-background', className)}>
            <div className={twMerge('flex flex-col', 'h-full w-90 border-x')}>
                <NavbarLayout />
                <Outlet />
            </div>
        </div>
    );
};

export default MobileLayout;
