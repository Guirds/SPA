import styled from 'styled-components';

export const Container = styled.div`
  letter-spacing: 3px;
  font-weight: bold;

  display: flex;
  margin-top: 15%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: 26px;
    line-height: 36px;
    text-align: center;
  }

  h2 {
    font-size: 26px;
    color: #007fff;
    line-height: 36px;
    display: inline;
  }
  img {
    margin-bottom: 15%;
    border-radius: 50%;
    width: 62px;
    height: 62px;
  }
`;

export const Icons = styled.section`
  display: flex;
  margin-top: 15%;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    margin-left: 30px;
  }
`;
