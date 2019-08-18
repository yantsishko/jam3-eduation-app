import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { withRouter } from "react-router-dom";
import st from "./style.less";

const ItemCard = ({
  title,
  author,
  status,
  topic,
  history,
  showAuthor,
  description,
  difficulty,
  rating,
  id
}) => {
  let ref = {};
  const useStyles = makeStyles({
    card: {
      width: "100%",
      maxWidth: "500px",
      margin: "5px 0",
      display: "inline-block"
    },
    cardInner: {
      padding: "8px"
    }
  });

  const classes = useStyles();

  const openCard = () => {
    history.push(`/materials/${id}`);
  };

  useEffect(()=>{
   if(ref) ref.innerHTML = description
  },[])

  const color = ['#6A48D7','#476DD5', '#6D89D5', '#5FC0CE']

  return (
    <Card className={classes.card} onClick={openCard}>
      <CardActionArea className={classes.cardInner}>
        <CardContent style={{padding: '6px'}}>
          <div className={st.cardHeader}>
            {topic && (
              <div>
                {topic.map((val, index) => (
                  <span className={st.topic} style={{backgroundColor: color[index] }}>{val}</span>
                ))}
              </div>
            )}
            <div className={st.difficulty}>{difficulty}</div>
          </div>

          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

          {description && (
            <Typography
              className={st.description}
              ref={node => ref = node}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          )}
        </CardContent>
        {/* {status && <CheckCircleOutlineIcon style={{ color: "#34D800" }} />}
        {!status && <ErrorOutlineIcon style={{ color: "#FFFD40" }} />} */}
        <div className={st.cardFooter}>
          <div>{rating && <span>Raiting: {rating}</span>}</div>
          <div>
            {showAuthor && (
              <Typography variant="body1" color="textSecondary" component="p">
                Author: {author.name}
              </Typography>
            )}
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(ItemCard);
