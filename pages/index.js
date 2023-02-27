import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomePageContent from "@/components/home/home-content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Selective Travel</title>
        <meta
          name="description"
          content="Selective Travel provides all the services you need for you holiday to Lake Garda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomePageContent />
        <h1>Selective Travel</h1>
      </main>
    </>
  );
}
