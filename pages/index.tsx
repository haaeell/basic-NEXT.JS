import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout pageTitle='Home Page'>
        <h1 className={styles['title-homepage']}>Haikal</h1>
      </Layout>
    </>

  )
}
