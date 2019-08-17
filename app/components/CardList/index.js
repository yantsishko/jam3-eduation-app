import React, { cloneElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "../Card";

const CardList = (props) => {
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
      author: "Yan T",
      status: false,
      id: 2312323
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      author: "Yan T",
      status: true,
      id: 233332
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      author: "Ivan P",
      status: true,
      id: 223132130,
    }
  ];

  return (
    <div>
      <div className={classes.list}>
        <div className={classes.demo}>
          <List>
            {list.map(({ title, tag, text, status, id, author }) => (
              <Card key={id} title={title} tag={tag} text={text} status={status} author={author} showAuthor={props.showAuthor}/>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default CardList;
