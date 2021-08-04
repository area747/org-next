import '../styles/softin.css';
import '../styles/bootstrap.softin.css';
import wrapper from '../store/configureStore';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
