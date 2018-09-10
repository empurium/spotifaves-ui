import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SpotifyButton = (props) => {
  const style = {
    button: {
      minWidth: '200px',
      padding: '12px 50px',
      borderRadius: '500px',
      letterSpacing: '0.1em',
      marginTop: props.marginTop ? `${props.marginTop}px` : null,
    },
    typography: {
      fontWeight: 'bold',
    },
  };

  return (
    <Button variant="contained" color="secondary" href={props.href} style={style.button}>
      <Typography variant="button" style={style.typography}>
        {props.children}
      </Typography>
    </Button>
  );
};

SpotifyButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};

export default SpotifyButton;
