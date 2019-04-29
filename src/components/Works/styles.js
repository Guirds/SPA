import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 62px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex: 1;

  color: #ffffff;
  margin-bottom: 30px;

  h1 {
    text-align: center;
    height: 16px;

    font-weight: 800;
    font-size: 16px;

    line-height: 16px;
    text-align: center;
    letter-spacing: 3px;

    color: #979797;
    margin-bottom: 10%;
  }
`;

export const Img = styled.div`
  margin-top: 30px;

  p {
    position: absolute;
    display: flex;
    margin-top: ${props => `${props.marginTop}%`};

    margin-left: 30px;
    width: 210px;
    height: 52px;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
  }
`;

export const Text = styled.div`
  span {
    position: absolute;
    border-radius: 13.5px;
    width: 83px;
    height: 23px;

    display: flex;
    margin-top: ${props => `${props.marginTop}%`};
    margin-left: 28px;
    margin-bottom: 10%;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    justify-content: center;

    background: #ffe300;
    color: #000000;
  }
  p {
    position: absolute;
    display: flex;

    margin-left: 28px;
    width: 200px;
    font-size: 18px;
    line-height: 26px;
    margin-top: 41%;
  }
`;

export const Text1 = styled(Text)`
  margin-top: 30px;
`;
