import Head from "next/head";
import BoatTripContent from "../../../components/boat-trips/boat-trip-page-content";
import styles from "../../../styles/Home.module.css";

function BoatTrips() {
  return (
    <>
      <Head>
        <title>Top Concierge - Boat Trips</title>
        <meta
          name="description"
          content="Top Concierge's recommendations for boat trips to discover Lake Garda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <BoatTripContent />
      </main>
    </>
  );
}

export default BoatTrips;
