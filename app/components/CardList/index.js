import React, { cloneElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "../Card";

const CardList = () => {
  const useStyles = makeStyles(theme => ({
    card: {},
    demo: {
      display: 'block',
      width: '50%',
      margin: 'auto',
    },
  }));

  const classes = useStyles();

  const list = [
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      status: false,
      id: 2312323
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      status: true,
      id: 233332
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      status: true,
      id: 223132130,
    }
  ];

  return (
    <div>
      <div className={classes.list}>
        <div className={classes.demo}>
          <List>
            {list.map(({ title, tag, text, status, id }) => (
              <Card title={title} tag={tag} text={text} status={status} id={id}/>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default CardList;
