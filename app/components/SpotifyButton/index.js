import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SpotifyButton = (props) => {
  const style = {
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 600,
    borderRadius: '500px',
    minWidth: '200px',
    padding: '12px 50px',
    marginTop: props.marginTop ? `${props.marginTop}em` : null,
  };

  return (
    <Button variant="contained" color="secondary" href={props.href} style={style}>
      {props.children}
    </Button>
  );
};

SpotifyButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};

export default SpotifyButton;
