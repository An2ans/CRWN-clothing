import React, {useState} from "react";
import CustomButton from "../custom-button/custom-button.jsx";
import CmsBlock from "../strapi-cms-block/cms-block.jsx";



const Footer = () => {
  const [lang, setLang] = useState("en-gb")
  console.log(lang);



const handleClick = () => {
  if(lang === "en-gb"){
    setLang("es-es")
  }else if (lang === "es-es"){
    setLang("en-gb")

  }
  console.log(lang);
}

return(
  <div>
    <CmsBlock cmsBlockId="footer-block-1" lang={lang} />
    <CustomButton onClick={handleClick}> Cambiar Idioma </CustomButton>
    </div>
    )} ;

    export default Footer;
