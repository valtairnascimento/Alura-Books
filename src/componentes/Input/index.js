import styled from 'styled-components';

const Input = styled.input`
  order: 1px solid #fff;
  background: #fff;
  border: 1px solid #fff;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #000;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

export default Input;
