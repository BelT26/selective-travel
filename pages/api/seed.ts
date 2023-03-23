// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";
// import Dol4 from "../..public/images/dolomites4.jpg"

// const prisma = new PrismaClient();
// type Data = {
//   name: string,
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   //   await prisma.table.deleteMany();
//   // await prisma.review.deleteMany();
//   await prisma.trip.deleteMany();
//   await prisma.experienceCategory.deleteMany();
//   // await prisma.user.deleteMany();

//   await prisma.experienceCategory.createMany({
//     data: [
//       {
//         title: "Coach Trips",
//         description:
//           "Welcome to Top Concierges amazing selection of coach excursions. ",
//         image: Dol4,
//       },
//       {
//         title: "Boat Trips",
//         description:
//           "Welcome to Top Concierges amazing selection of excursions by boat. ",
//         image: "../..public/images/boat2.jpg",
//       },
//     ],
//   });

//   const experiencecategories = await prisma.experienceCategory.findMany();

//   const coachTripId =
//     experiencecategories.find(
//       (experiencecategory) => experiencecategory.title === "Coach Trips"
//     )?.id || 1;

//   const boatTripId =
//     experiencecategories.find(
//       (experiencecategory) => experiencecategory.title === "Boat Trips"
//     )?.id || 1;

//   await prisma.trip.createMany({
//     data: [
//       {
//         title: "Venice",
//         description: [
//           "ivamus pharetra vel arcu feugiat sagittis. Morbi vestibulum malesuada justo at vulputate. Suspendisse fermentum, diam sit amet aliquam consectetur, orci risus condimentum diam, ut malesuada lorem purus vel libero. In hac habitasse platea dictumst. Etiam non luctus velit, quis mollis nisl. Praesent congue justo ac augue commodo, sit amet pellentesque ligula tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum ligula non dui rhoncus vehicula",
//           "Aliquam dignissim sapien non orci rhoncus porttitor. Phasellus sodales hendrerit ultrices. Quisque dignissim auctor velit, nec porta ipsum aliquam a. Fusce ac tempus quam. Curabitur quis sem ex. Pellentesque sodales interdum augue, in cursus sapien rutrum a. Donec leo est, dictum at rhoncus ac, blandit in odio. In accumsan eget dolor vitae interdum. Sed et ante faucibus, luctus lectus sit amet, commodo nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
//         ],
//         images: [
//           {imgSrc :"../..public/images/venice.jpg", alt: "venice", id:"VCE1"},
//           {imgSrc :"../..public/images/venice2.jpg", alt: "venice", id:"VCE2"},
//           {imgSrc :"../..public/images/venice3.jpg", alt: "venice", id:"VCE3"},
//           {imgSrc :"../..public/images/venice4.jpg", alt: "venice", id:"VCE4"},
//           {imgSrc :"../..public/images/venice5.jpg", alt: "venice", id:"VCE5"},

//         ],
//         price: 65,
//         days: ["Mondays", "Wednesdays"],
//         duration: "full day",
//         hours: "12",
//         highlights: ["Explore on foot", "	See Rialto", "Visit Doge’s Palace"],
//         included: ["Walking tour", "Museum ticket", "Lunch", "Boat trip"],
//         excluded: ["Drinks with meal", "Tips"],
//         coach_features: [
//           "Air-con",
//           "Wifi",
//           "WC",
//           "On-board safety",
//           "Comfort stops on request",
//         ],
//         tips: [
//           "Comfy shoes",
//           "Bring water",
//           "Phone or Camera",
//           "Charge phone",
//           "Cash is useful",
//           "Advise of late return and book early breakfast(if staying in a hotel)",
//         ],
//         slug: "/venice",
//         category_id: coachTripId,
//       },
//     ],
//   });

//   //   const userLaith = await prisma.user.create({
//   //     data: {
//   //       first_name: "Helen",
//   //       last_name: "Taylor",
//   //       email: "helen.taylor@hotmail.it",
//   //       password: "L4k3G4rd4",
//   //
//   //     },
//   //   });

//   //

//   //   const userMirko = await prisma.user.create({
//   //     data: {
//   //       first_name: "Mirko",
//   //       last_name: "Sose",
//   //       email: "mirko_sose@hotmail.com",  //
//   //       password: "t0pc0nc1erge",
//   //
//   //     },
//   //   });

//   //   await prisma.review.createMany({
//   //     data: [
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
//   //         rating: 5,
//   //         restaurant_id: vivaanId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
//   //         rating: 5,
//   //         restaurant_id: bluRistoranteId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
//   //         rating: 5,
//   //         restaurant_id: elCatrinId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
//   //         rating: 4,
//   //         restaurant_id: stelvioId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "Extremely disappointing in our experience.",
//   //         rating: 2,
//   //         restaurant_id: laBartolaId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
//   //         rating: 5,
//   //         restaurant_id: elCatrinId,
//   //         user_id: userLaith.id,
//   //       },
//   //       {
//   //         first_name: "Laith",
//   //         last_name: "Harb",
//   //         text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
//   //         rating: 5,
//   //         restaurant_id: kamasutraIndianId,
//   //         user_id: userLaith.id,
//   //       },
//   //       ]

//   //   await prisma.table.createMany({
//   //     data: [
//   //       {
//   //         restaurant_id: vivaanId,
//   //         seats: 4,
//   //       },
//   //       {
//   //         restaurant_id: vivaanId,
//   //         seats: 4,
//   //       },
//   //       {
//   //         restaurant_id: vivaanId,
//   //         seats: 2,
//   //       },
//   //     ],
//   //   });

//   res.status(200).json({ name: "hello" });
// }
