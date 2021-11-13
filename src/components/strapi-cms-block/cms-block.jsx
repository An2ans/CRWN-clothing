import React, {useEffect, useState} from "react";
import {RichText} from "prismic-reactjs";
import {client} from "../../prismic-configuration";

const CmsBlock = (props) => {
const [content, setContent] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    const result = await client.getByUID("cms_block",props.cmsBlockId, {lang: props.lang})
    if (result) {
      return setContent(result);
    } else {
      console.warn("not found");
    }
  }
  fetchData()
})
if(content) {
  return(
    <div>
      <h1> {RichText.asText(content.data.title)} </h1>
      <RichText render={content.data.content} />
    </div>
  )}else{
    return "NOT FOUND"
  }

};

export default CmsBlock;
