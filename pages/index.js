import Head from 'next/head';
import React from 'react';
import getCommerce from '../utils/commerce';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>We Print Your Gift | Online Gift Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.media.source} alt={product.name} />
            <p> {product.name} </p>
            <p> {product.price.formatted_with_symbol} </p>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        Copy rights We Print Your Gift 2021
      </footer>
    </div>
  );
}

// Function to get list of products from commerce js and render into server side of our app
export async function getStaticProps() {
  // Create an instance of Commerce
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
