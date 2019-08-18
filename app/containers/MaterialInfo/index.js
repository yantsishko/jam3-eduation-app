import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMaterialById, voteMaterial } from "../../actions/materials";
import Header from "../../components/header";
import FaceIcon from "@material-ui/icons/Face";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import st from "./style.less";
import Comments from '../../components/comments';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaterialInfo = ({ match, list, history, voteMaterial }) => {
  let ref = {};
  const [state, setState] = useState({
    info: {
      title: "",
      text: "",
      date: "",
      showAuthor: false
    }
  });

  const like = async () => {
    await voteMaterial(match.params.id);
    toast.success("Ваше одобрение принято", {
      autoClose: false,
    });
  };

  useEffect(() => {
    const id = match.params.id;
    fetch(`https://ejam3.acarica.com/api/task/${id}`, {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(info => {
        setState({ info });
        document.getElementById('description-info').innerHTML = info.description;
      })
      .catch(console.log);

    }, []);

    return (
    <div>
      <Header history={history} />

      <div className={st.container}>
          <div className={st.author}>
            <FaceIcon />
            <Typography variant="h2" color="textSecondary" component="h2">
              {state.info.author ? state.info.author.name : ''}
            </Typography>
          </div>


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

        <div id='description-info' />

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
        <div>
          <ThumbUpIcon
            onClick={like}
            className={st.like}
          />
        </div>
      </div>
      <Comments />
      <ToastContainer />
    </div>
  );
};

export default withRouter(
  connect(
    stage => ({
      list: stage.get("materials").cardList
    }),
    {
      getMaterialById,
      voteMaterial,
    }
  )(MaterialInfo)
);
