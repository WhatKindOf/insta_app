import React from "react";
import Login from "./Login";
import Join from "./Join";
import Appbar from "./Appbar";

export default class Which extends React.Component {
  render() {
    const {
      what,
      showJoin,
      showLogin,
      homeOrUser,
      showAppbar,
      showHome,
      showUser
    } = this.props;
    return what === "login" ? (
      <Appbar
        showHome={showHome}
        showUser={showUser}
        homeOrUser={homeOrUser}
        showLogin={showLogin}
      />
    ) : what === "join" ? (
      <Join showLogin={showLogin} />
    ) : (
      <Login showJoin={showJoin} showAppbar={showAppbar} />
    );
  }
}
