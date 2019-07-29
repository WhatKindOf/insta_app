import React, { Fragment } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar
} from "react-native";
import { SearchBar } from "react-native-elements";
import Home from "./Home";
import User from "./User";

class Appbar extends React.Component {
  state = {
    search: ""
  };

  render() {
    return (
      <Fragment>
        <StatusBar hidden={true} />
        <View style={styles.appbar}>
          <TouchableOpacity onPress={this.props.showHome}>
            <Image source={require("./assets/images/insta.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.showHome}>
            <Image source={require("./assets/images/camera.png")} />
          </TouchableOpacity>
          <SearchBar
            placeholder="검색"
            value={this.state.search}
            onChangeText={text => {
              this.setState({ search: text });
            }}
            containerStyle={{
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputContainerStyle={{
              width: 150,
              backgroundColor: "white",
              borderColor: "#e6e6e6",
              borderWidth: 1
            }}
          />
          <TouchableOpacity onPress={this.props.showUser}>
            <Image source={require("./assets/images/user.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.showHome}>
            <Image source={require("./assets/images/exit.png")} />
          </TouchableOpacity>
        </View>
        {this.props.homeOrUser === "default" ? <Home /> : <User />}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "#e6e6e6",
    borderBottomWidth: 1
  }
});

export default Appbar;
