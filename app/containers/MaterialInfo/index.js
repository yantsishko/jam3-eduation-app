import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMaterialById } from "../../actions/materials";
import Header from "../../components/header";
import FaceIcon from "@material-ui/icons/Face";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import st from "./style.less";

const MaterialInfo = ({ match, list, history }) => {
  const [state, setState] = useState({
    info: {
      title: "",
      text: "",
      date: ""
    }
  });

  useEffect(() => {
    const id = match.params.id;
    const material = list.findIndex(material => material.id === id);
    setState({ info: list[material] });
  }, []);

  return (
    <div>
      <Header history={history} />

      <div className={st.container}>
        {state.info.showAuthor && (
          <div className={st.author}>
            <FaceIcon />
            <Typography variant="h2" color="textSecondary" component="h2">
              {state.info.author}
            </Typography>
          </div>
        )}

        <Typography
          variant="h3"
          color="textSecondary"
          component="h3"
          className={st.text}
        >
          {state.info.title}
        </Typography>

        <Typography variant="body1" color="textSecondary" component="p">
          {state.info.date}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {state.info.text}
        </Typography>

        <div className={st.status}>
          {state.info.status && (
            <div>
              Publick
              <CheckCircleOutlineIcon style={{ color: "#34D800" }} />
            </div>
          )}
          {!state.info.status && (
            <div>
              Disabled
              <ErrorOutlineIcon style={{ color: "#FFFD40" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    stage => ({
      list: stage.get("materials").cardList
    }),
    {
      getMaterialById
    }
  )(MaterialInfo)
);
