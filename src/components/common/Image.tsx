import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = (props: ImageProps) => {
  return <img {...props} />;
};

export default Image;
