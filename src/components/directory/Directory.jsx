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
      {this.state.sections.map(({title, imageUrl, id, size}) => (<MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>))}
    </div>);

  }

}

export default Directory;
