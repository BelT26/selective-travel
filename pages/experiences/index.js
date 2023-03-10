import Head from "next/head";
import ExcursionsPageContent from "@/components/excursions/excursions-page-content";
import styles from "@/styles/Home.module.css";

function Experiences() {
  return (
    <>
      <Head>
        <title>Top Concierge - Excursions</title>
        <meta
          name="description"
          content="Top Concierge provides unrivalled excursions from the finest local service providers to a range of stunning destinations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <ExcursionsPageContent />
      </main>
    </>
  );
}

export default Experiences;
