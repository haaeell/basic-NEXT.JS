import Head from 'next/head';
import { ReactNode } from 'react'
import Footer from '../Footer.tsx'
import Header from '../Header'
import styles from './Layout.module.css'

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>NextJS Basic | {pageTitle}</title>
                <meta name='description' content='website NEXT JS Basic'></meta>
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content} >{children}</div>
                <Footer />
            </div>
        </>
    )
}
