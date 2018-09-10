import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import theme from 'containers/App/theme';

import Container from './Container';
import TextShadow from './TextShadow';

const Hero = (props) => {
  const style = {
    container: {
      textAlign: props.centered ? 'center' : null,
    },
    heroText: {
      color: props.color || theme.palette.primary.main,
      fontWeight: 'bold',
      letterSpacing: 1,
      marginBottom: '40px',
    },
  };

  return (
    <Container style={style.container}>
      <Typography variant="display3" style={style.heroText}>
        <TextShadow>{props.heroText}</TextShadow>
      </Typography>

      {props.heroTagline ? (
        <Typography variant="headline">
          <TextShadow>{props.heroTagline}</TextShadow>
        </Typography>
      ) : (
        ''
      )}

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
