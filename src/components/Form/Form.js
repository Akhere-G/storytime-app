import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";
const initialPostData = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

const Form = () => {
  const [postData, setPostData] = useState(initialPostData);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
  };

  const handleClear = () => {
    setPostData(initialPostData);
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.form} ${classes.root} `}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Create a story</Typography>

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
            setPostData(prev => ({ ...prev, tags: e.target.value }));
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
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          sumbit
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
