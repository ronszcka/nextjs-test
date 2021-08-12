import Head from "next/head";
import Link from 'next/link';

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
      <main>
          <h1>All ninjas...</h1>
          { ninjas.map(ninja => (
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
              <a>
                <h3>{ ninja.name }</h3>
              </a>
            </Link>
          ))}
      </main>
    </>
  )
}
  