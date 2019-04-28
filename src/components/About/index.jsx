import React from 'react';

import { Text, RedeSocial, Container } from './styles.js';

const About = () => (
  <div>
    <Container>
      <Text>
        <h2>ABOUT</h2>
        <span>UX/UI</span>
        <p>
          Of course, motivation really isn't
          {' '}
          <h1>simple at all</h1>
. That is why there is
          multi-billion industry focused on self-help books, tapes, seminars, camps, and coaches.
        </p>
      </Text>

      <div>
        <Text>
          <span>Motion</span>
          <p>
            As humans, we have progressed in so many ways, but we have lost touch with our bodies,
            nature, and the power of prayer.
            {' '}
            <h1>See more...</h1>
          </p>
        </Text>
      </div>
      <Text>
        <span>Branding</span>
        <p>
          If at anytime, you notice that a friend of yours is getting demotivated about life, try to
          inspire hi/her as much as you can.
          {' '}
          <h1>See more...</h1>
        </p>
      </Text>

      <Text>
        <span>Development</span>
        <p>
          Personally, the importance does not lie in what religion you are; however, a lack of
          religion does seem to run parallel with depression.
          {' '}
          <h1>See more...</h1>
        </p>
      </Text>
      <RedeSocial>
        <div>
          <img src="../../../images/google.png" />
          <img src="../../../images/Airbnb.png" />
          <img src="../../../images/Dropbox.png" />
        </div>
      </RedeSocial>
    </Container>
  </div>
);

export default About;
