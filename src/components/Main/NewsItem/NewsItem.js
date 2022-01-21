import React from "react";
import faker from "faker";
import "./NewsItem.scss";
import {Tooltip, IconButton, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {theme} from "../../../services/theme";

export function NewsItem(props) {

  const {news} = props;

  //------------------------------------------------------RETURN-------------------------------------------//

  return <Card sx={{ maxWidth: 345 }} className="news__item">
    <CardMedia
      component="img"
      className="news__photo"
      height="140"
      src={news.photo}
      alt="pic"
      width="300px"
      title="photo"
    />
    <CardContent sx={{padding: "0"}}>

      <Typography gutterBottom variant="h5"
                  component="p"
                  className="news__title">
        {news.title}
      </Typography>

      <Typography gutterBottom variant="h6" className="news__text">
        <b>Text: </b>
        {news.text}
      </Typography>

      <Typography gutterBottom variant="h7"
                  component="p"
                  className="news__description">
        <b>Description: </b>
        {news.description}
      </Typography>

      <Typography gutterBottom variant="h7"
                  component="p"
                  className="news__author">
        <b>Author: </b>
        {news.author}
      </Typography>

      <p className="news__hashTags">
        <b>Hash tags: </b>
        {news.hashTags.map((item) => {
          return <span key={faker.datatype.uuid()}>{item + " "}</span>;
        })}
      </p>

      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </CardContent>
  </Card>
}