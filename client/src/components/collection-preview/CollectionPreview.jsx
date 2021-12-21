import React from 'react';
import CollectionItem from "../collection-item/collection-item.jsx";

import {CollectionPreviewContainer,PreviewContainer, CollectionPreviewTitle } from "./collection-preview.styles.jsx";

const CollectionPreview = ({title, items}) => (<CollectionPreviewContainer>
  <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
  <PreviewContainer>
    {
      items.filter((item, index) => index < 4).map((item) => (
        <CollectionItem key={item.id} item={item}/>


      ))}
  </PreviewContainer>
</CollectionPreviewContainer>);

export default CollectionPreview;
