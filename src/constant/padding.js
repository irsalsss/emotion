import { css } from '@emotion/react';

// klo di scss
// @for $i from -150 to 280 {
//   .pl-#{$i} {
//     padding-left: $i + px !important;
//   }
//   .pr-#{$i} {
//     padding-right: $i + px !important;
//   }
//   .pb-#{$i} {
//     padding-bottom: $i + px !important;
//   }
//   .pt-#{$i} {
//     padding-top: $i + px !important;
//   }
//   .px-#{$i} {
//     padding-left: $i + px!important;
//     padding-right: $i + px!important;
//   }
//   .py-#{$i} {
//     padding-top: $i + px !important;
//     padding-bottom: $i + px !important;
//   }
// }

export const pt = (props) => css`
  padding-top: ${props}px;
`;

export const pb = (props) => css`
  padding-bottom: ${props}px;
`;

export const pl = (props) => css`
  padding-left: ${props}px;
`;

export const pr = (props) => css`
  padding-right: ${props}px;
`;

export const px = (props) => css`
  ${pl(props)}
  ${pr(props)}
`;

export const pxRem = (props) => css`
  padding-left: ${props}rem;
  padding-right: ${props}rem;
`;

export const py = (props) => css`
  padding-top: ${props}px;
  padding-bottom: ${props}px;
`;

export const pyRem = (props) => css`
  padding-top: ${props}rem;
  padding-bottom: ${props}rem;
`;

export const p = (props) => css`
  padding-top: ${props}px;
  padding-bottom: ${props}px;
  padding-left: ${props}px;
  padding-right: ${props}px;
`;
