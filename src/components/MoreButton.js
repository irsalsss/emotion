import styled from '@emotion/styled';
// import styled from 'styled-components'

const Button = styled.button`
  padding: 32px;
  background-color: #ff6289;
  font-size: 24px;
  border-radius: 4px;
  color: whitesmoke;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: #ff93ac;
  }
`;

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 32px;
  background: #ffc2cd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const MoreButton = () => {
  const listArr = Array(10000).fill(1);
  return (
    <div>
      {listArr.map((v, idx) => (
        <Wrapper key={idx}>
          <Button>This is my component {idx + 1}</Button>
        </Wrapper>
      ))}
    </div>
  )
}

export default MoreButton;