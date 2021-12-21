import React from 'react';
import {withRouter} from "react-router-dom";
import { MenuItemContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <MenuItemContainer className={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image"
      style={{
      backgroundImage: `url(${imageUrl})`
      }} > </div>
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle >Shop Now</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
