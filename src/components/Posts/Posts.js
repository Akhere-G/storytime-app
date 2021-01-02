import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/posts";

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    dispatch(actions.getPosts());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!posts || !posts.length) {
    return (
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <Typography variant='h4' className={classes.title}>
            No Posts
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map(post => {
        return (
          <Grid key={post._id} item xs={12} md={6}>
            <Post _id={post._id} {...post} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
