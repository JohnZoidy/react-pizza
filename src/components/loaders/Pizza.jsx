/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = (props) => (
  <ContentLoader
    speed={2}
    width={290}
    height={455}
    viewBox="0 0 290 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="271" rx="3" ry="3" width="280" height="23" />
    <circle cx="145" cy="133" r="122" />
    <rect x="1" y="303" rx="3" ry="3" width="280" height="84" />
    <rect x="6" y="398" rx="3" ry="3" width="90" height="26" />
    <rect x="156" y="393" rx="3" ry="3" width="122" height="38" />
  </ContentLoader>
);

export default PizzaLoader;
