import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();
  console.log(posts);

  if (!posts.length) {
    return <CircularProgress />;
  }

  return (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map(post => {
        return <Post key={post._id} {...post} />;
      })}
    </Grid>
  );
};

export default Posts;
