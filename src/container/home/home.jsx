import React, { Component, Fragment } from "react";
import "./home.css";
import Profile from "./../../components/profile/profile";
import { GlobalConsumer } from "./../../context/context";

class Home extends Component {
  state = {
    username: "",
  };

  handleSearchChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  componentDidUpdate = () => {
    const input = document.querySelector("input");
    input.focus();
    // input.select();
  };

  render() {
    return (
      <div className="home">
        <div className="home__search">
          <label htmlFor="username">Github Username</label>
          <div className="home__search__box">
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleSearchChange}
              autoFocus
            />
            <button
              className="btn"
              onClick={() =>
                this.props.dispatch({
                  type: "GET_GITHUB",
                  username: this.state.username,
                })
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="home__result">
          {this.props.state.isUserFound === true ? (
            <Fragment>
              <p>Click projects for repository</p>
              <Profile profile={this.props.state.user} />
            </Fragment>
          ) : (
            <h4>{this.props.state.error}</h4>
          )}
        </div>
      </div>
    );
  }
}

export default GlobalConsumer(Home);
