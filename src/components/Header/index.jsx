import React from 'react';

import { Container, Icons, Nav } from './styles';

const Header = () => (
  <header>
    <Nav>
      <img src="../../../images/Navigation.png" alt="Navegação" />
    </Nav>
    <Container>
      <img src="../../../images/perfil.jpg" alt="Foto de Perfil" />
      <h1>
        Motivation Is The First Step To
        {' '}
        <h2>Sucess</h2>
      </h1>
    </Container>
    <Icons>
      <img src="../../../images/Shape (1).png" alt="" />
      <img src="../../../images/Shape.png" alt="" />
      <img src="../../../images/instagram.png" alt="" />
    </Icons>
  </header>
);

export default Header;
