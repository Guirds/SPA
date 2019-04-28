import React from 'react';
import {
  Img, Text, Text1, Container,
} from './styles.js';

const Works = () => (
  <div>
    <Container>
      <h1>Works</h1>
      <Text marginTop={35}>
        <span>Featured</span>
        <p>Motivation Is The First Step To Sucess</p>
      </Text>
      <img src="'../../../images/photo.png" />

      <Img marginTop={83}>
        <p>How Great Is The Strength Of Your Belief</p>
      </Img>
      <img src="'../../../images/photo (1).png" />

      <Img marginTop={65}>
        <p>Benjamin Franklin S Method Of Habit Formation</p>
      </Img>
      <img src="'../../../images/photo (2).png" />

      <Text1 marginTop={35}>
        <span>Featured</span>
        <p>Increasing Prosperity With Positive Thinking</p>
      </Text1>
      <img src="'../../../images/photo (3).png" />
    </Container>
  </div>
);

export default Works;
