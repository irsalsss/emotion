/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

const paragraph = css`
  color: blue;

  p {
    color: red;
    border-bottom: 1px solid hotpink;
    cursor: pointer;
  }
`
// hmmmmm
const paragraph1 = css`
  color: blue;

  ${'' /* klo nested di element header */}
  header & {
    color: red;
  }
`;

const Paragraph = styled.p`
  visibility: hidden;
`;

const Button = styled.button`
  color: red;
  &:hover:nth-child(1) {
    p {
      visibility: initial;
    }
  }
`;

const Card = styled.div`
  ${Button}:nth-child(2) {
    color: black;
  }
`;

const NestedQuery = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <div css={paragraph}>
        Some text.
        <p>A link with a bottom border.</p>
      </div>

      <hr />

      <header>
        <p css={paragraph1}>
          This is green since it's inside a header
        </p>
      </header>
      <p css={paragraph1}>
        This is turquoise since it's not inside a header.
      </p>

      <hr />

      {arr.map(v => (
        <Card key={v}>
          <Button>
            pertama {v}
            <Paragraph>
              hover yang pertama
            </Paragraph>
          </Button>

          <Button>
            kedua {v}
            <Paragraph>
              hover yang kedua
            </Paragraph>
          </Button>
        </Card>
      ))}
    </div>
  )
}

export default NestedQuery;