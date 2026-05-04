// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 BUTTON - Generic Button for the component */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label: string;
}

const Button: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <button
            {...props}
            className={twMerge(
                'cursor-pointer rounded-xl bg-blue-600 py-2 hover:bg-blue-600/90',
                className
            )}
        >
            {label}
        </button>
    );
};

export default Button;
