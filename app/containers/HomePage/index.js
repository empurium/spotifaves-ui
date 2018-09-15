/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs.
 */

import React from 'react';
import shuffle from 'lodash/shuffle';

import ImageGrid from 'components/ImageGrid';
import Hero from 'components/Hero';
import SpotifyButton from 'components/SpotifyButton';
import images from './images';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  // Will move this hardcoding soon...
  authUrl = 'http://spotifaves.test:8080/auth/spotify';

  constructor(props) {
    super(props);

    this.images = shuffle(images);

    if (typeof document === 'object' && typeof document.getElementsByTagName === 'function') {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }

  render() {
    return (
      <ImageGrid
        images={this.images}
        bgColor="#000"
        opacity={0.45}
        imageWidth={320}
        imageHeight={320}
        staggered={750}
        centered
      >
        <Hero
          heroText="Spotify Favorites"
          heroTagline="Find New Releases from the Artists you Follow."
          color="white"
          centered
        >
          <SpotifyButton href={this.authUrl} marginTop={50}>
            Login with Spotify
          </SpotifyButton>
        </Hero>
      </ImageGrid>
    );
  }
}
