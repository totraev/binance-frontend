import React, { FC, SVGAttributes } from 'react';

type IconProps = SVGAttributes<SVGElement>;

type SortIconProps = IconProps & {
  arrowUpColor?: string;
  arrowDownColor?: string;
};

export const SearchIcon: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M3 10.982c0 3.845 3.137 6.982 6.982 6.982 1.518 0 3.036-.506 4.149-1.416L18.583 21 20 19.583l-4.452-4.452c.81-1.113 1.416-2.631 1.416-4.149 0-1.922-.81-3.643-2.023-4.958C13.726 4.81 11.905 4 9.982 4 6.137 4 3 7.137 3 10.982zM13.423 7.44a4.819 4.819 0 011.416 3.441c0 1.315-.506 2.53-1.416 3.44a4.819 4.819 0 01-3.44 1.417 4.819 4.819 0 01-3.441-1.417c-1.012-.81-1.518-2.023-1.518-3.339 0-1.315.506-2.53 1.416-3.44.911-1.012 2.227-1.518 3.542-1.518 1.316 0 2.53.506 3.44 1.416z"
      fill="currentColor"
    ></path>
  </svg>
);

export const AngleIcon: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 12 12" {...props}>
    <path d="M16 9v1.2L12 15l-4-4.8V9h8z"></path>
  </svg>
);

export const StarIcon: FC<IconProps> = ({ className, width, height, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    width={width}
    height={height}
    onClick={onClick}
  >
    <path
      d="M21.4 10.8c-.3-1.1-.3-1.1-.7-2.1l-6-.1L12.8 3h-2.2l-2 5.6-5.9.1c-.3 1.1-.3 1.1-.7 2.1l4.8 3.6L5 20.1l1.8 1.3 4.9-3.4 4.9 3.4c.9-.7.9-.6 1.8-1.3l-1.8-5.7 4.8-3.6z"
      fill="currentColor"
    ></path>
  </svg>
);

export const SortIcon: FC<SortIconProps> = ({
  arrowUpColor,
  arrowDownColor,
  className,
  width,
  height,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    width={width}
    height={height}
  >
    <path d="M16 12.85v1.65L12.75 18 9.5 14.5v-1.65H16z" fill={arrowUpColor}></path>
    <path d="M9.5 9.745v-1.65l3.25-3.5 3.25 3.5v1.65H9.5z" fill={arrowDownColor}></path>
  </svg>
);

StarIcon.defaultProps = {
  width: 12,
  height: 12,
};

SortIcon.defaultProps = {
  arrowDownColor: 'currentColor',
  arrowUpColor: 'currentColor',
  width: 16,
  height: 16,
};
