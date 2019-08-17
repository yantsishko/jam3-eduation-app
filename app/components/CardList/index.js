import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "../Card";

const CardList = ({ list }) => {
  const useStyles = makeStyles(theme => ({
    card: {},
    demo: {
      display: "block",
      width: "100%",
      margin: "auto"
    },
    list: {
      display: "flex",
      alignContent: "center"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.list}>
      <Typography variant="h6" className={classes.title}>
        List Item
      </Typography>
      <div className={classes.demo}>
        <List>
          {list.map(({ title, tag, text, status, id }) => (
            <Card title={title} tag={tag} text={text} status={status} id={id} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default CardList;
