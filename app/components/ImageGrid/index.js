import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-lazyload-fadein';

import ImageGridContainer from './ImageGridContainer';
import GridList from './GridList';

const ImageGrid = (props) => {
  const defaultWidth = 250;
  const defaultHeight = 250;

  const style = {
    container: {
      backgroundColor: props.bgColor || null,
    },
    gridList: {
      width: props.centered ? '180%' : '100%',
      marginLeft: props.centered ? '-40%' : '0',
      opacity: props.opacity || 1,
    },
    gridListItem: {
      width: props.imageWidth ? `${props.imageWidth}px` : `${defaultWidth}px`,
      height: props.imageHeight ? `${props.imageHeight}px` : `${defaultHeight}px`,
      opacity: props.opacity || 1,
    },
  };

  const staggeredLoad = (onload) => {
    const staggered = props.staggered ? Math.floor(Math.random() * Math.floor(props.staggered)) : 0;
    setTimeout(onload, staggered);
  };

  return (
    <ImageGridContainer>
      {props.children ? props.children : ''}
      <GridList style={style.gridList}>
        {props.images.map((image, i) => (
          <li key={`${image.toString()}-${i}`} style={style.gridListItem}>
            <FadeIn
              width={props.imageHeight || defaultWidth}
              height={props.imageWidth || defaultHeight}
              offset={props.imageWidth || defaultWidth}
              once
            >
              {(onload) => (
                <img
                  src={image.src}
                  onLoad={() => staggeredLoad(onload)}
                  width={style.gridListItem.width}
                  height={style.gridListItem.height}
                  alt={image.alt || ''}
                />
              )}
            </FadeIn>
          </li>
        ))}
      </GridList>
    </ImageGridContainer>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
  bgColor: PropTypes.string,
  opacity: PropTypes.number,
  centered: PropTypes.bool,
  staggered: PropTypes.number,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default ImageGrid;
