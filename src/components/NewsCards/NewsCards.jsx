import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typoraphy } from '@material-ui/core';
import {useStyles} from './style'

const NewsCards = ({ articles }) => {
  const classes = useStyles()
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems='stretch'>
        {articles.map((article, i) => (
          <Grid item xs={1} sm={6} lg={3} style={display: 'flex'}>
              <NewsCard article={article} i={i} />
          </Grid>
       
        ))} 
       </Grow>
  );
};

export default NewsCards;
