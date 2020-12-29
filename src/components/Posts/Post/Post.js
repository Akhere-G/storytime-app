import React from "react";
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
  const classes = useStyles({});
  const tagsString = tags.map(tag => `#${tag}`).join(", ");
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{creator}</Typography>
        <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size='small'
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
        <Typography variant='h6' gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          <ThumbUpAlt /> Like {likeCount}
        </Button>
        <Button size='small' style={{ color: "#F50057" }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
