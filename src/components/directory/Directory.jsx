import React from 'react';
import "./directory.scss";
import MenuItem from "../menu-item/Menu-Item.jsx";
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector.js";
import {createStructuredSelector} from "reselect";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({id, ...otherSectionsProps}) => (
    <MenuItem key={id} {...otherSectionsProps}/>
  ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
sections: selectDirectorySections
});



export default connect(mapStateToProps)(Directory);
