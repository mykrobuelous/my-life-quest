// 📦 LIBRARIES IMPORT
import { Provider } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import store from '../store/store';

/* ===================================================================== */
/*🧩 PROVIDER LAYOUT - Layout of the provider where providers and configs live */

interface Props {
    children: React.ReactNode;
}

const ProviderLayout: React.FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ProviderLayout;
