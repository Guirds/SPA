import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;
`;
export const Form = styled.div`
  input {
    height: ${props => `${props.height}px`};
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
    background: #f2f2f2;
    margin-bottom: 10px;
  }
`;

export const Text = styled(Form)`
  display: flex;
`;

export const Button = styled.div`
  display: flex;

  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const Submit = styled(Button)`
  display: flex;
  margin-top: 13%;
`;
