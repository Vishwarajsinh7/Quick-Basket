import React from 'react';

export const AuthLogoBasket = ({ className = '', size = 48, fill = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M4 10L6 4h12l2 6h2v3h-2v7H4v-7H2v-3h2zm4-4L6.5 10h11L16 6H8zm-2 9v3h12v-3H6z" />
  </svg>
);

export const AuthUserAdd = ({ className = '', size = 48, fill = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);
