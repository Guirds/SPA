import React from 'react';

import {
  Container, Form, Text, Button, Submit,
} from './styles';

const Footer = () => (
  <div>
    <Container>
      <Form height={50}>
        <span>NAME</span>
        <input type="text" placeholder="Fulano" />
        <span>E-MAIL</span>
        <input type="text" placeholder="Fulano@emai.com" />
        <span>MESSAGE</span>
        <Text height={100}>
          <input type="text" placeholder="mensagem" />
        </Text>
      </Form>

      <Submit>
        <img src="../../../images/Oval.png" alt="" />
        <Button>
          <img src="../../../images/Send.png" alt="" />
        </Button>
      </Submit>
    </Container>
  </div>
);
export default Footer;
