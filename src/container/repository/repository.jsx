import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GlobalConsumer } from "./../../context/context";

import Project from "../../components/project/project";
import "./repository.css";

class Repository extends Component {
  render() {
    return (
      <div className="repository">
        {this.props.state.user ? (
          <div className="repository__header">
            <h3>{this.props.state.user.login}</h3>
            <p>REPOSITORIES</p>
          </div>
        ) : null}
        <div className="repository__action">
          <Link className="btn" to="/">
            Back to Search
          </Link>
        </div>
        {this.props.state.repositories.length > 0 ? (
          <div className="repository__wrapper">
            {this.props.state.repositories.map((project) => {
              return (
                <Project
                  key={project.id}
                  project={project}
                  username={this.props.state.user.login}
                />
              );
            })}
          </div>
        ) : (
          <h4>This user didn't have any project</h4>
        )}
      </div>
    );
  }
}

export default GlobalConsumer(Repository);
