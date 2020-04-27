import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./detail.css";
class Detail extends Component {
  state = {
    projectName: "",
    content: {},
    readme: "",
  };
  goBack = () => {
    this.props.history.goBack();
  };
  componentDidMount = () => {
    this.setState({
      projectName: this.props.match.params.projectName,
    });
    Axios.get(
      `https://api.github.com/repos/${this.props.match.params.username}/${this.props.match.params.projectName}/contents/README.md?ref=master`
    ).then(
      (res) => {
        this.setState({
          readme: atob(res.data.content),
        });
      },
      (err) => {
        console.log(err.response);
      }
    );
  };
  render() {
    return (
      <div className="detail">
        <div className="detail__header">
          <h3>{this.state.projectName}</h3>
          <p>README</p>
        </div>
        <div className="detail__action">
          <Link to="/" className="btn">
            Search User
          </Link>
          <button className="btn" onClick={this.goBack}>
            Back to Repository
          </button>
        </div>
        {this.state.readme.length > 0 ? (
          <div className="detail__readme">
            <pre>{this.state.readme}</pre>
          </div>
        ) : (
          <h4>This repository didn't have README file</h4>
        )}
      </div>
    );
  }
}

export default Detail;
