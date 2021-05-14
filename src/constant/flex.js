import { css } from '@emotion/react';

export const dFlex = css({
  display: 'flex'
})

export const justifyBetween = css({
  justifyContent: 'space-between'
})

export const justifyCenter = css({
  justifyContent: 'center'
})

export const itemsCenter = css({
  alignItems: 'center'
})

// first camelCase is justify-content; second is align-items;
export const flexBetweenCenter = css
`
  ${dFlex}
  ${justifyBetween}
  ${itemsCenter}
`

export const flexCenterCenter = css
`
  ${dFlex}
  ${justifyCenter}
  ${itemsCenter}
`
