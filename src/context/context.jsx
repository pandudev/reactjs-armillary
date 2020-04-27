import React, { createContext, Component } from "react";
import Axios from "axios";

const RootContext = createContext();
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {
  return class ParentComponent extends Component {
    state = {
      user: {},
      isUserFound: false,
      repositories: [],
    };

    dispatch = (action) => {
      if (action.type === "GET_GITHUB") {
        Axios.get(`https://api.github.com/users/${action.username}`).then(
          (res) => {
            return this.setState(
              {
                user: res.data,
                isUserFound: true,
                repositories: [],
              },
              () => {
                Axios.get(
                  `https://api.github.com/users/${action.username}/repos`
                ).then(
                  (res) => {
                    return this.setState({
                      repositories: res.data,
                    });
                  },
                  (err) => {
                    console.log(err);
                  }
                );
              }
            );
          },
          (err) => {
            if (!err.response) {
              alert("Error Network, check your internet connection");
            } else if (err.response.status === 404) {
              alert("User " + err.response.statusText);
              return this.setState({
                user: {},
                repositories: [],
                isUserFound: false,
              });
            }
          }
        );
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
