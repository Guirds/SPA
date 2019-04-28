import React from 'react';

import { Container, Text, Submit } from './styles';

const Footer = () => (
  <div>
    <Container height={50}>
      <span>NAME</span>
      <input type="text" placeholder="Fulano" />
      <span>E-MAIL</span>
      <input type="text" placeholder="Fulano@emai.com" />
      <span>MESSAGE</span>
      <Text height={100}>
        <input type="text" placeholder="mensagem" />
      </Text>
      <img src="../../../images/Oval.png" alt="" />
    </Container>
  </div>
);
export default Footer;
