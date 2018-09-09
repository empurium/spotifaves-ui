/**
 * Lots of testing in here for window and localStorage since I may
 * create an Electron app with this at some point.
 *
 * Will need to refactor and add Electron methods for getting/storing
 * the token at some point, will tackle then.
 */

import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import { AUTH_TOKEN_NAME } from 'utils/constants';

/**
 * Check whether the user is authenticated.
 *
 * @return {boolean} True or false.
 */
export const isAuthenticated = () => getUser() !== false;

/**
 * Retrieve the user object from the stored token.
 *
 * @return {user|false} User object or false.
 */
export const getUser = () => {
  try {
    return jwtDecode(getToken());
  } catch (err) {
    return false;
  }
};

/**
 * Return an object with an Authorization Bearer header
 * for use with any http request library.
 *
 * @return {object} Object with auth header or empty.
 */
export const authHeader = () => {
  const token = getToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

/**
 * Retrieve the token appropriately, save it if necessary.
 *
 * @return {any} Token or false.
 */
export const getToken = () => {
  if (getTokenFromLocalStorage()) {
    return getTokenFromLocalStorage();
  }

  const token = getTokenFromHash();
  if (token) {
    storeTokenLocalStorage(token);

    return token;
  }

  return false;
};

/**
 * Internal. Retrieve the token from browser localStorage.
 *
 * @return {any} Token string, or false|null.
 */
const getTokenFromLocalStorage = () => {
  if (typeof localStorage !== 'object' || typeof localStorage.getItem !== 'function') {
    return false;
  }

  return localStorage.getItem(AUTH_TOKEN_NAME);
};

/**
 * Internal. Retrieve the token string from the window location hash.
 *
 * @return {any} Token string, or false|null.
 */
const getTokenFromHash = () => {
  if (typeof window === 'undefined' || !window.location.hash) {
    return false;
  }

  const hash = queryString.parse(window.location.hash);

  return hash && hash.token ? hash.token : false;
};

/**
 * Internal. Store the token in the browser's localStorage.
 * Typically called after OAuth redirects to us.
 *
 * @return {boolean} True on success, false on error.
 */
const storeTokenLocalStorage = (token) => {
  if (typeof localStorage !== 'object' || typeof localStorage.setItem !== 'function') {
    return false;
  }

  localStorage.setItem(AUTH_TOKEN_NAME, token);
  clearLocationHash();

  return true;
};

/**
 * Internal. Clear the window location hash, likely after retrieving
 * and storing the token.
 *
 * @return {boolean} True on success, false on error.
 */
const clearLocationHash = () => {
  if (typeof window !== 'object' || typeof window.location !== 'object') {
    return false;
  }

  window.location.hash = '';

  return true;
};
