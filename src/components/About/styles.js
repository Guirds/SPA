import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  line-height: 30px;
  height: auto;
  width: 273px;
  flex: 1;
`;

export const Text = styled.div`
  span {
    color: #000000;
    display: fle;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 1px;
    margin-top: 10%;
  }
  h2 {
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 3px;
    color: #979797;
  }

  h1 {
    font-size: 16px;
    line-height: 16px;
    color: #007fff;
    display: inline;
  }

  div {
    margin-top: 10px;
  }
`;

export const RedeSocial = styled.div`
  display: flex;
  margin-top: 15%;
  align-items: center;
  justify-content: space-between;
`;
