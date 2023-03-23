import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePageContent from "../components/home/home-content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Concierge</title>
        <meta
          name="description"
          content="Top Concierge provides all the services you need for you holiday to Lake Garda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <HomePageContent />
      </main>
    </>
  );
}
