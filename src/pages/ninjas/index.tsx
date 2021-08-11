import Head from "next/head";

import styles from '../../../styles/Ninjas.module.css';

export const getStaticProps = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: {
      ninjas: data
    }
  }

}

export default function Ninjas({ ninjas }) {
  return (
    <>
    <Head>
      <title>Ninja List | List</title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <div>
          <h1>All ninjas...</h1>
          { ninjas.map(ninja => (
            <div key={ninja.id}>
              <a className={styles.single}>
                <h3>{ ninja.name }</h3>
              </a>
            </div>
          ))}
      </div>
    </>
  )
}
  