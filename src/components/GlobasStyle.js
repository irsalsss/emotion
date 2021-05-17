/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgBlack } from '../constant/color';

const paragraph = css`
  color: blue;

  .card-pink {
    background: black;
  }
`

const GlobasStyle = () => {
  return (
    <div>
      <div className="card-pink">
        Test
      </div>

      <hr />
      {/* overwrite bg color */}
      <div className="card-pink" css={bgBlack}>
        Test
      </div>

      <hr />
      <div css={paragraph}>
        <div className="card-pink">
          Test
        </div>
      </div>
    </div>
  )
}

export default GlobasStyle;