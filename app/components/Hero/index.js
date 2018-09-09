import React from 'react';
import PropTypes from 'prop-types';

import theme from 'containers/App/theme';

import Container from './Container';
import Text from './Text';
import Tagline from './Tagline';

const Hero = (props) => {
  const style = {
    container: {
      textAlign: props.centered ? 'center' : null,
    },
    heroText: {
      color: props.color || theme.palette.primary.main,
      marginBottom: 0,
    },
  };

  return (
    <Container style={style.container}>
      <Text style={style.heroText}>{props.heroText}</Text>
      {props.heroTagline ? <Tagline>{props.heroTagline}</Tagline> : ''}

      {props.children}
    </Container>
  );
};

Hero.propTypes = {
  heroText: PropTypes.string.isRequired,
  heroTagline: PropTypes.string,
  color: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Hero;
