/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { minWidth } from '../constant/media-query';

const MediaQuery = () => {
  return (
    <div>
      {/* --------------INLINE STYLE -------------- */}
      <div
        css={{
          marginBottom: '2rem',
          backgroundColor: 'hotpink',
          [minWidth[3]]: {
            backgroundColor: 'red'
          }
        }}
      >
        This has a dynamic background.
      </div>

      <div
        css={css`
          color: white;
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          ${minWidth[1]} {
            background-color: blue;
          }
        `}
      >
        This has a dynamic background with string style.
      </div>
    </div>
  )
}

export default MediaQuery;