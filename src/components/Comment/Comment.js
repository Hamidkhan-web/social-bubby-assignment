import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {CssBaseline, ListSubheader,} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    background: 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)',

  },
 
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 650,
  },
  
  media: {
    
    height: 0,
  },
  img: {
    padding: 100,
    
  },

  avatar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  text: {
    padding: theme.spacing(2, 2, 2),
  },
  
  subheader: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  
}));


const Comment = () => {

    const [post, setPost,] = useState([]);
    const [comment, setComments] = useState([]);
    const {id} = useParams([]);
    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setPost(data));
      },[id]);

      
   
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [id]);
   
    const classes = useStyles();
 
    return (
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {post.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={new Date().toTimeString()}
        />
        <CardMedia
          className={classes.media} />
        <img className={classes.img} src={`https://picsum.photos/600/300?random=${id}`} alt="" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
      <CssBaseline />
        <Typography className={classes.text} variant="h5" gutterBottom>
          All Comment
        </Typography>
        <List className={classes.list}>
          {comment.map(({ id, name, body }) => (
            <div>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 4 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar >
                    <img src={`https://picsum.photos/600/300?random=${id}`} alt="" /> 
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={body} />
              </ListItem>
            </div>
           ))}
        </List>
        </CardContent>
      </Card>
    );
  }
export default Comment;