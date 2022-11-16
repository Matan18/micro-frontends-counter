import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Counter from '../components/counter'
import styles from '../styles/Home.module.css'

type Props = {
  date: string;
}

export default function Home({ }) {
  return (
    <div className={styles.container}>
      <h1>Rendered in <a href='https://counter-microfrontend.matandriola.com/counter'>counter-microfrontend.matandriola.com</a></h1>
      <Counter />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const date = new Date().toISOString();
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    props: { date }
  }
}
