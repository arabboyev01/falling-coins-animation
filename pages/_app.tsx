import type { AppProps } from 'next/app'
import '../src/style/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp