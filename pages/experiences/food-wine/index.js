import Head from "next/head";
import FoodWineContent from "../../../components/food-wine/food-wine-page-content";
import styles from "../../../styles/Home.module.css";

function FoodWine() {
  return (
    <>
      <Head>
        <title>Top Concierge - Food and Wine</title>
        <meta
          name="description"
          content="Top Concierge's recommendations for gastronomic experiences in the Lake Garda area"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>
        <FoodWineContent />
      </main>
    </>
  );
}

export default FoodWine;
