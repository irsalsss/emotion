import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  margin-bottom: 16px;
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'
  };

  ${props =>
    props.bgColor ? `background-color: ${props.bgColor}` : ''
  };

  ${props =>
    props.color ? `color: ${props.color}` : ''
  };
`;

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

const Styled = () => {
  return (
    <Container column>
      <Button>This is a regular button.</Button>
      <Button primary>This is a primary button.</Button>
      <Button primary bgColor='red' color='white'>This is a primary button.</Button>
    </Container>
  )
}

export default Styled;