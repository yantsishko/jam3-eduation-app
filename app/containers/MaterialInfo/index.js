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

const MaterialInfo = ({ match, list, history }) => {
  const color = ['#6A48D7','#476DD5', '#6D89D5', '#5FC0CE'];
  const [state, setState] = useState({
    info: {
      title: "",
      text: "",
      date: "",
      showAuthor: false,
      createdAt: "",
      topic:[],
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
        document.getElementById("description-info").innerHTML =
          info.description;
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Header history={history} />

      <div style={{padding: '0 40px'}}>
      {state.info.topic.map((tag, index)=>(<spam className={st.tag} style={{backgroundColor: color[index]}}>{tag}</spam>))}
      </div>

      <div className={st.container}>
        <div className={st.author}>
          <FaceIcon />
          <Typography
            variant="h2"
            color="textSecondary"
            component="h2"
            className={st.name}
          >
            {state.info.author ? state.info.author.name : ""}
          </Typography>
        </div>
        <div className={st.timeLine}>
          <div className={st.date}>{state.info.createdAt.split("T")[0]}</div>
          <div>
            <div className={st.status}>
              {state.info.status === "APPROVED" && (
                <div>
                  <p style={{margin: '0'}}>Опубликовано</p>
                  <CheckCircleOutlineIcon style={{ color: "#34D800" }} />
                </div>
              )}
              {state.info.status === "NEW" && (
                <div>
                  <p  style={{margin: '0'}}>Не опубликовано</p>
                  <ErrorOutlineIcon style={{ color: "#FFFD40" }} />
                </div>
              )}
            </div>
          </div>
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

        <div id="description-info" />
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
