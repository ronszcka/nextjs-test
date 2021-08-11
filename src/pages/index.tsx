import Head from 'next/head';

import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio Virtual</title>
        <meta name="keywords" content="cardápio virtual" />
        <meta name="google" content="notranslate" />
      </Head>
      <main className="notranslate">
          <h1 className={styles.title}>Home page</h1>
      </main>
    </>
  )
}
