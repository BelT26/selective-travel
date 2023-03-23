import Head from "next/head";
import SportsPageContent from "../../../components/sports-wellness/sports-page-content";
import styles from "../../../styles/Home.module.css";

function SportWellness() {
  return (
    <>
      <Head>
        <title>Top Concierge - Verona Opera</title>
        <meta
          name="description"
          content="Top Concierge's recommendations for sport and wellness activities"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <SportsPageContent />
      </main>
    </>
  );
}

export default SportWellness;
