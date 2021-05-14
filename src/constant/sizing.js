import { css } from '@emotion/react';

export const width = (props) => css`
  width: ${props}px;
`;

export const height = (props) => css`
  height: ${props}px;
`;

export const box = (h, w) => css`
  ${height(h)}
  ${width(w)}
`;