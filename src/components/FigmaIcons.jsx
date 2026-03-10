import React from 'react';

export const LogoBasket = ({ className = '', size = 24, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M4 10L6 4h12l2 6h2v3h-2v7H4v-7H2v-3h2zm4-4L6.5 10h11L16 6H8zm-2 9v3h12v-3H6z" />
  </svg>
);

export const ShopNowBasket = ({ className = '', size = 24, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M17 9l-1.5-6H8.5L7 9H2v2h2l1.6 9.6C5.8 21.9 6.8 23 8.1 23h7.8c1.3 0 2.3-1.1 2.5-2.4L20 11h2V9h-5zm-7.5-4h5l1 4h-7l1-4zm6.1 16H8.4l-1.3-8h9.8l-1.3 8z" />
  </svg>
);

export const FreshProduceIcon = ({ className = '', size = 32, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M12 2c1.5 0 2.5 1.5 2 3-2 6-8 6-10 6 0-1.5 1.5-2.5 3-2C13 10 13 4 15 2c0 0-2 0-3 0z" />
    <circle cx="12" cy="15" r="7" />
  </svg>
);

export const BakeryIcon = ({ className = '', size = 32, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    {/* A solid croissant made of arched segments */}
    <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
    <path d="M12 4v16" stroke={fill === "#8C2A24" ? "white" : "#8C2A24"} strokeWidth="2" />
    <path d="M6 12h12" stroke={fill === "#8C2A24" ? "white" : "#8C2A24"} strokeWidth="2" />
    <path d="M8 7l8 10M16 7l-8 10" stroke={fill === "#8C2A24" ? "white" : "#8C2A24"} strokeWidth="2" />
  </svg>
);

export const PantryIcon = ({ className = '', size = 32, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    {/* Wine glass */}
    <path d="M5 6h4v4c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2V6zM6.5 12v6m-1.5 0h3" stroke={fill} strokeWidth="2" />
    {/* Bottle */}
    <path d="M13 3h4v4l1 3v12h-6V10l1-3V3z" />
  </svg>
);

export const PromoTruck = ({ className = '', size = 32, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M3 5h11v11H3V5zm12 3h4l3 4v4h-7V8z" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="18" r="3" />
  </svg>
);

export const PromoPercent = ({ className = '', size = 24, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}>
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M19 5L5 19" stroke={fill} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
