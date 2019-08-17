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
      justifyContent: 'center'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <div className={classes.list}>
        <div className={classes.demo}>
          <List className={classes.list}>
            {list.map(({ title, tag, text, status, id, author }) => (
              <Card key={id} id={id} title={title} tag={tag} text={text} status={status} author={author} showAuthor={showAuthor}/>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

CardList.defaultProps = {
  list: [],
};

export default CardList;
