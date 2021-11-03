import React from 'react';
import "./directory.scss";
import MenuItem from "../menu-item/Menu-Item.jsx"
import Sections from "./directory-data.js"

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: Sections
    }
  }

  render() {
    return (<div className="directory-menu">
      {this.state.sections.map(({id, ...otherSectionsProps}) => (
        <MenuItem key={id} {...otherSectionsProps}/>))}
    </div>);

  }

}

export default Directory;
