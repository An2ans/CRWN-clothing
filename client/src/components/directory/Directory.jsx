import React from 'react';
import "./directory.scss";
import MenuItem from "../menu-item/Menu-Item.jsx";
import {useSelector} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector.js";

const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return(
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionsProps}) => (
      <MenuItem key={id} {...otherSectionsProps}/>
    ))}
    </div>
  );
}



export default (Directory);
