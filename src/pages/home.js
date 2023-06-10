import React from 'react';

import Headerhome from '../comp/Headerhome';
import Footer from '../comp/Footer';
import Main from '../comp/Main';
import Section from '../comp/Section';

function Home() {
  const backgroundImage = "https://www.cleartrip.com/collections/wp-content/uploads/2019/03/jordan.jpg";

  return (
    <>
      <Headerhome />

      <Main />
      <br /><br />
      <Section />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />

      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100vh;
            position: relative;
          }
        `}
      </style>
    </>
  );
}

export default Home;
