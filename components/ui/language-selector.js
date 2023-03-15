import { useState } from "react";
import ItalianLogo from "../../public/images/italian.png";
import EnglishLogo from "../../public/images/english.png";
import GermanLogo from "../../public/images/german.png";

const languages = [
  { title: "EN", logo: EnglishLogo },
  { title: "DE", logo: GermanLogo },
  { title: "IT", logo: ItalianLogo },
];

function LanguageSelector() {
  const [language, setLanguage] = useState("EN");
  return <div></div>;
}
