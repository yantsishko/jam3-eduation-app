import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "../Card";

const CardList = ({ list, showAuthor }) => {
  const useStyles = makeStyles(theme => ({
    demo: {
      display: "block",
      width: "100%",
      margin: "auto"
    },
    list: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }
  }));
console.log(list)
  const classes = useStyles();

  return (
    <div>
      <div className={classes.list}>
        <div className={classes.demo}>
          <List className={classes.list}>
            {list.map(
              ({ title, topic, status, id, description, author, rating, difficulty }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  topic={topic}
                  status={status}
                  author={author}
                  showAuthor={showAuthor}
                  difficulty={difficulty}
                  rating={rating}
                />
              )
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

CardList.defaultProps = {
  list: []
};

export default CardList;
