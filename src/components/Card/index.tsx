import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardProps } from '../../redux/types';
import { useHistory } from 'react-router';
import {useDispatch} from "react-redux";
import {fetchBookById} from "../../redux/actions";

const useStyles = makeStyles({
  root: {
   width: '350px',
   height: '450px',
   marginBottom: '20px'
  },
  media: {
    height: 240,
  },
});

export const BookCard = ({image, title, categories, authors, id}: CardProps):ReactElement => {

  const history = useHistory()

  const dispatch = useDispatch()

  const getDetails = () => {
    dispatch(fetchBookById(id))
    history.push(`/details/:${id}`)
  }

  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={getDetails}>
      <CardActionArea>
        <CardMedia
            component="img"
            className={classes.media}
            image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {categories}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {authors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}