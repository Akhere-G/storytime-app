import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";

import moment from "moment";

import useStyles from "./styles";

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
const Post = ({
  _id,
  selectedFile,
  title,
  creator,
  createdAt,
  tags,
  message,
  likeCount,
  setCurrentId,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  const classes = useStyles({});
  const tagsString = tags.map(tag => `#${tag}`).join(" ");
  const dispatch = useDispatch();

  return (
    <Card className={`${classes.card} ${isHidden ? classes.hidden : ""} `}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{creator}</Typography>
        <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size='small'
          label='edit'
          onClick={() => {
            setCurrentId(_id);
          }}
        >
          {<MoreHoriz fontSize='default' />}
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {tagsString}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <Typography variant='body2' gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => {
            console.log("liked");
            dispatch(likePost(_id));
          }}
          size='small'
          color='primary'
        >
          <ThumbUpAlt /> &nbsp; Like &nbsp; {likeCount}
        </Button>
        <Button
          onClick={() => {
            setIsHidden(true);
            setTimeout(() => {
              dispatch(deletePost(_id));
            }, 300);
          }}
          size='small'
          style={{ color: "#F50057" }}
        >
          <Delete fontSize='small' style={{ color: "#F50057" }} />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
