/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { bgBlack, bgWhite, white } from '../constant/color';
import { pxRem, py, p } from '../constant/padding';
import { flexCenterCenter } from '../constant/flex';
import { box } from '../constant/sizing';

const hotpink = css({
  color: 'hotpink'
})

// pseudo-class
const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  // overwrite
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)

const BasicButton = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <h2>Basic</h2>
      <p css={hotpink}>This is hotpink</p>
      <button onClick={() => setShowButton(!showButton)} css={hotpinkHoverOrFocus}>
        This is hotpink on hover or focus
      </button>
      <p css={hotpinkWithBlackBackground}>
        This has a black background and is hotpink. Try moving
        where hotpink is in the css call and see if the color
        changes.
      </p>

      {/* --------------INLINE STYLE -------------- */}
      <div
        css={{
          marginBottom: '2rem',
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen'
          }
        }}
      >
        This has a hotpink background.
      </div>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: white;
          }
        `}
      >
        Hover to change color.
      </div>

      {/* --------------IMPORT / REUSABLE STYLE -------------- */}
      <p css={[ bgBlack, white, py(20), pxRem(1) ]}>
        This has a black background and is hotpink. Try moving
        where hotpink is in the css call and see if the color
        changes.
      </p>

      <div aria-label='box-black' css={[ flexCenterCenter, p(16), bgBlack ]}>
        <div css={[ box(100, 200), bgWhite ]} />
      </div>
    </div>
  )
}

export default BasicButton;