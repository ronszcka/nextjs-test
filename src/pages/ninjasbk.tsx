import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
          <h1 className={styles.title}>Home page</h1>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quaerat aut, odit molestiae at debitis consequatur. Placeat commodi, eveniet quos, doloremque deleniti tempore iure voluptates in facere sit debitis dolore?</p>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quaerat aut, odit molestiae at debitis consequatur. Placeat commodi, eveniet quos, doloremque deleniti tempore iure voluptates in facere sit debitis dolore?</p>
          <Link href="/ninjas">
            <a className={styles.btn}>See Ninja Listing</a>
          </Link>
      </div>
    </>
  )
}
