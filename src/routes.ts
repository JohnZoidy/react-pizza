const host = '';

export default {
  cartPage: () => [host, 'cart'].join('/'),
  mainPage: () => [host, '/'].join(''),
  infoPage: () => [host, 'pizza', ':id'].join('/'),
  notFoundPage: () => [host, '*'].join('/'),
};