import '../styles/bootstrap.softin.css';
import '../styles/custom.css';
import '../styles/icon.css';
import '../styles/components/form.css';
import '../styles/components/button.css';
import '../styles/softin.css';
import '../styles/softin.sap.css';
import '../styles/pages/orgView.css';
import '../styles/pages/orgConfig.css';
import wrapper from '../store/configureStore';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
