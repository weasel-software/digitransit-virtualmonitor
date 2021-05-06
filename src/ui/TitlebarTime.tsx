import AutoMoment from 'src/ui/AutoMoment';

import React = require('react');

const TitlebarTime = () => (
  <div id="title-time" style={{ fontSize: 'min(4vw, 4em)' }}>
    <AutoMoment />
  </div>
);

export default TitlebarTime;
