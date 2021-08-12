import Head from 'next/head';

import Card from '../components/card/Card.component';
import Grid from '../components/grid/Grid.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio Virtual</title>
        <meta name="keywords" content="cardápio virtual" />
      </Head>
      <main>
          <Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Grid>
      </main>
    </>
  )
}
