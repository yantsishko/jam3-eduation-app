import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { withRouter } from "react-router-dom";
import st from "./style.less";

const ItemCard = ({ title, text, author, status, tag, id, history, showAuthor }) => {
  const useStyles = makeStyles({
    card: {
      width: "100%",
      maxWindth: '500px',
      margin: "5px 0"
    },
    cardInner: {
      padding: "8px"
    }
  });

  const classes = useStyles();

  const openCard = () => {
    history.push(`/card/:${id}`)
  };

  return (
    <Card className={classes.card} onClick={openCard}>
      <CardActionArea className={classes.cardInner}>
        <CardContent>
          <div className={st.cardHeader}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <div>
              {
                showAuthor && (
                  <Typography variant="body1" color="textSecondary" component="p">
                    Author: {author}
                  </Typography>
                )
              }
              <Typography variant="body1" color="textSecondary" component="p">
                Tag: {tag}
              </Typography>
            </div>
          </div>

          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <div className={st.cardFooter}>
          {status && <CheckCircleOutlineIcon style={{ color: "#34D800" }} />}
          {!status && <ErrorOutlineIcon style={{ color: "#FFFD40" }} />}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(ItemCard);
