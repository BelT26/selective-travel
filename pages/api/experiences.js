import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    const {
      title,
      description,
      slug,
      type,
      days,
      duration,
      hours,
      price,
      included,
      excluded,
      tips,
      features,
    } = req.body;

    if (
      !title ||
      title.trim() === "" ||
      description.length === 0 ||
      !slug ||
      !days
    ) {
      // res
      //   .status(422)
      //   .json({ message: "All required fields must be completed" });
      return;
    }

    const newExperience = {
      title,
      description,
      slug,
      type,
      days,
      duration,
      hours,
      price,
      included,
      excluded,
      tips,
      features,
    };
    console.log(newExperience);
    res
      .status(201)
      .json({ message: "Added experience", experience: newExperience });
  }
  res.status(200).json({ message: "This works!" });
}
