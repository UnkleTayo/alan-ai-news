import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey =
  '54eaf4f4e7efdb16678e65a153fa4d6a2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  });
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src='https://alan.app/voice/images/previews/preview.jpg'
          className={classes.alanLogo}
          alt='logo'
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
