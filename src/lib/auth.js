import netlifyIdentity from 'netlify-identity-widget';

export const auth = netlifyIdentity;

export function init(callback) {
  netlifyIdentity.on('init', user => {
    callback(user);
  });
  netlifyIdentity.init({
    APIUrl: process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  });
}

export function logIn(callback) {
  netlifyIdentity.open();
  netlifyIdentity.on('login', user => {
    callback(user);
    netlifyIdentity.close();
  });
}

export function logOut(callback) {
  netlifyIdentity.logout();
  netlifyIdentity.on('logout', () => {
    callback();
  });
}