import ExcursionSummaryCopy from "./excursion-summary-copy";
import classes from "./excursion-list.module.css";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchExcursions = async () => {
  const excursions = await prisma.trip.findMany();
  return excursions;
};

async function ExcursionListCopy() {
  const excursions = await fetchExcursions();
  console.log(excursions);
  return (
    <div className={classes.list_container}>
      {/* {excursions.map((excursion) => (
        <ExcursionSummaryCopy excursion={excursion} key={excursion.id} />
      ))} */}
    </div>
  );
}

export default ExcursionListCopy;
