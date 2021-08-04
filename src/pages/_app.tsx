import '../styles/softin.css'
import '../styles/bootstrap.softin.css'
// import '../styles/softin.font.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
