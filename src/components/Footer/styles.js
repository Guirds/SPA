import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 20px 0;
  }

  input {
    height: ${props => `${props.height}px`};
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
    background: #f2f2f2;
  }

  img {
    margin-left: 70%;
    margin-top: 10%;

    width: 20%;
  }
`;

export const Text = styled(Container)``;
export const Submit = styled.div`
  img {
    background: red;
    width: 20%;
  }
`;
