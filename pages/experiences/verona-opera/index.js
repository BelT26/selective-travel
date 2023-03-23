import Head from "next/head";
import OperaPageContent from "../../../components/verona-opera/opera-page-content";
import styles from "../../../styles/Home.module.css";

function VeronaOpera() {
  return (
    <>
      <Head>
        <title>Top Concierge - Verona Opera</title>
        <meta
          name="description"
          content="Top Concierge can provide with a magical night at the Verona Opera"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <OperaPageContent />
      </main>
    </>
  );
}

export default VeronaOpera;
