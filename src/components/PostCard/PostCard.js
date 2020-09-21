import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';




const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '50px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    background: 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)',

  },
  
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
  },
  media: {
    height: 0,
  },

  avatar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  Tabs:{
    margin: 'auto',

  },
}));


const PostCard = (props) => {
  
  const { id, title, body } = props.posts;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {id}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={title}
      subheader={new Date().toTimeString()}
    />
    <CardMedia
      className={classes.media} />
    <img src={`https://picsum.photos/600/300?random=${id}`} alt="" />


    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>


      <Tabs className={classes.Tabs}>
        <Tab icon={<ThumbUpAltOutlinedIcon />} aria-label="Like" />
        <IconButton>
         <Link to={`/posts/${id}`}><Button className={classes.button} >Show details</Button></Link>
        </IconButton>
        <Tab icon={<ShareOutlinedIcon />} aria-label="share" />
      </Tabs>
    </CardActions>
    

  </Card>
  
);
}

export default PostCard;