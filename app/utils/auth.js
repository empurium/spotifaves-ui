import jwtDecode from 'jwt-decode';

export const TOKEN_NAME = 'token';

export const isAuthenticated = () => {
  if (localStorage && localStorage.getItem(TOKEN_NAME)) {
    try {
      jwtDecode(localStorage.getItem(TOKEN_NAME));
      return true;
    } catch (err) {
      console.error('Could not decoded token.');
    }
  }

  return false;
};

export const authHeader = () => {
  if (localStorage.getItem('token')) {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }

  return {};
};
