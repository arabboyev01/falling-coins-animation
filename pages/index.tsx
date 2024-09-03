import Head from 'next/head';
import CoinDrop from '@/CoinDrop';

export default function Home(){
    return(
        <div className="container">
            <Head>
                <title>Coin Drop</title>
                <meta name="description" content="An interactive coin drop game" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <CoinDrop />
            </main>
        </div>
    )
}