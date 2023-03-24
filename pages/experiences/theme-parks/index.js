import Head from "next/head";
import ThemeParkPageContent from "../../../components/theme-parks/theme-park-page-content";
import styles from "../../../styles/Home.module.css";

function Excursions() {
  return (
    <>
      <Head>
        <title>Top Concierge - Excursions</title>
        <meta
          name="description"
          content="Top Concierge can source tickets for and recommend fun local theme parks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <ThemeParkPageContent />
      </main>
    </>
  );
}

export default Excursions;
