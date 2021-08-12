import Head from 'next/head';

import Button from '@material-ui/core/Button';

import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio Virtual</title>
        <meta name="keywords" content="cardápio virtual" />
      </Head>
      <main>
          <div className={styles.grid}>
            
            <div className={styles.card}>
              <div className={styles.product_header}>
                <img className={styles.image} alt="Imagem do Produto" src="https://pigbem-imagens.s3-sa-east-1.amazonaws.com/images/546/produto/1/foto1" />
                <div className={styles.details}>
                  <label className={styles.name}>La pasta a carbonara</label>
                  <label className={styles.description}>La mejor pasta del brasil</label>
                </div>
              </div>
              <div className={styles.product_footer}>
                <label className={styles.promotion}>R$ 89,00</label>
                <label className={styles.price}>R$ 99,00</label>
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              </div>
            </div>

          </div>
      </main>
    </>
  )
}
