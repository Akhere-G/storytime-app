import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/posts";

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(actions.getPosts());
  }, [dispatch]);

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
