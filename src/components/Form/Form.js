import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const currentPost = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null
  );

  useEffect(() => {
    if (currentPost) {
      setPostData(currentPost);
    }
  }, [currentId, currentPost]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handleClear();
  };

  const handleClear = () => {
    setCurrentId(null);

    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.form} ${classes.root} `}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? "Update" : "Create"} a story
        </Typography>

        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={e => {
            setPostData(prev => ({ ...prev, creator: e.target.value }));
          }}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={e => {
            setPostData(prev => ({ ...prev, title: e.target.value }));
          }}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={e => {
            setPostData(prev => ({ ...prev, message: e.target.value }));
          }}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={e => {
            setPostData(prev => ({
              ...prev,
              tags: e.target.value.split(",").map(t => t.trim()),
            }));
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={base64 => {
              setPostData(prev => ({ ...prev, selectedFile: base64.base64 }));
            }}
          />
        </div>
        <Button
          className={currentId ? classes.buttonUpdate : classes.buttonSubmit}
          variant='contained'
          size='large'
          type='submit'
          fullWidth
        >
          {currentId ? "UPDATE" : "sumbit"}
        </Button>
        <Button
          onClick={handleClear}
          variant='contained'
          color='secondary'
          size='small'
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
