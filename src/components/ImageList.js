import React from 'react';
import './ImageList.scss';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
return <ImageCard key={image.id} image={image}/>
});


return (<div className = "img-container">
  <div className ="image-list">{images}</div>
  </div>
);
};

export default ImageList;