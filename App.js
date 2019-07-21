import React, { Fragment } from "react";
import { StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    email: "",
    password: ""
  };

  async componentDidMount() {
    await Font.loadAsync({
      JUA: require("./assets/fonts/BMJUA_ttf.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    return (
      <View style={styles.home}>
        <StatusBar hidden={true} />
        <View style={styles.title}>
          {this.state.fontLoaded ? (
            <Text
              style={{ fontFamily: "JUA", fontSize: 40, fontWeight: "bold" }}
            >
              Insta_App
            </Text>
          ) : (
            <Text>Insta_App</Text>
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.login}>
            <TextInput
              style={styles.textInput}
              placeholder="이메일 또는 아이디"
              type="text"
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              type="password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            {this.state.email !== "" || this.state.password !== "" ? (
              <Button title="로그인" type="solid" />
            ) : (
              <Button title="로그인" type="outline" />
            )}
          </View>
          <View style={styles.joinDiv}>
            {this.state.fontLoaded ? (
              <Text
                style={{
                  marginRight: 15,
                  fontFamily: "JUA",
                  fontSize: 15,
                  fontWeight: "bold"
                }}
              >
                계정이 없으신가요?
              </Text>
            ) : (
              <Text>계정이 없으신가요?</Text>
            )}
            <Button title="가입하기" type="clear" />
          </View>
        </View>
        <View style={styles.footer}>
          {this.state.fontLoaded ? (
            <Fragment>
              <Text style={{ fontFamily: "JUA", fontSize: 20 }}>
                @2019 INSTA_APP
              </Text>
              <Text style={{ fontFamily: "JUA", fontSize: 20 }}>
                Made by Pyeon Ho Seong
              </Text>
            </Fragment>
          ) : (
            <Fragment>
              <Text>@2019 INSTA_APP</Text>
              <Text>Made by Pyeon Ho Seong</Text>
            </Fragment>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  },
  title: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  login: {
    height: "50%",
    width: "80%",
    backgroundColor: "#fafafa",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    paddingLeft: "14%",
    paddingRight: "14%",
    borderColor: "#e6e6e6",
    borderWidth: 1
  },
  textInput: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    height: "20%",
    paddingLeft: 10
  },
  joinDiv: {
    height: "15%",
    width: "80%",
    marginTop: 20,
    backgroundColor: "#fafafa",
    borderRadius: 15,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center"
  }
});
