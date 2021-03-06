import React, { Fragment } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  StatusBar,
  ImageBackground
} from "react-native";
import { Button } from "react-native-elements";

class User extends React.Component {
  state = {
    reply: ""
  };

  render() {
    return (
      <Fragment>
        <StatusBar hidden={true} />

        <ImageBackground
          source={require("./assets/images/test.png")}
          style={styles.profileDiv}
        >
          <Image
            style={styles.bigProfileImg}
            source={require("./assets/images/profile.png")}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              유승호_official
            </Text>
            <Text style={{ fontSize: 14 }}>유승호</Text>
          </View>
        </ImageBackground>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="프로필 사진 변경"
            type="clear"
            onPress={this.props.showJoin}
          />
          <Button
            title="회원 탈퇴"
            type="clear"
            onPress={this.props.showJoin}
          />
        </View>

        <ScrollView>
          <View style={styles.content}>
            <View style={styles.upper}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.profileImg}
                  source={require("./assets/images/test.png")}
                />
                <Text>Jasimy</Text>
              </View>
              <View>
                <Text style={{ color: "gray" }}>1시간</Text>
              </View>
            </View>
            <View style={styles.mid}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("./assets/images/test.png")}
              />
            </View>
            <View style={styles.lower}>
              <View style={styles.withReply}>
                <ScrollView nestedScrollEnabled={true}>
                  <View style={{ flexDirection: "column", marginBottom: 14 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginRight: 8
                      }}
                    >
                      JasimyJasimyJasimy
                    </Text>
                    <Text>
                      지금은 테스트 중 입니다. 지금은 테스트 중 입니다. 지금은
                      테스트 중 입니다.
                    </Text>
                  </View>
                  <View style={{ flexDirection: "column", marginBottom: 14 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4
                      }}
                    >
                      <Image
                        style={styles.profileImg}
                        source={require("./assets/images/test.png")}
                      />
                      <Text style={{ fontSize: 10 }}>Jasimy</Text>
                    </View>
                    <View
                      style={{
                        width: "85%",
                        marginLeft: 40,
                        borderColor: "#e6e6e6",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderTopLeftRadius: 0,
                        padding: 3
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "gray" }}>
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", marginBottom: 14 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4
                      }}
                    >
                      <Image
                        style={styles.profileImg}
                        source={require("./assets/images/test.png")}
                      />
                      <Text style={{ fontSize: 10 }}>Jasimy</Text>
                    </View>
                    <View
                      style={{
                        width: "85%",
                        marginLeft: 40,
                        borderColor: "#e6e6e6",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderTopLeftRadius: 0,
                        padding: 3
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "gray" }}>
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", marginBottom: 14 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 4
                      }}
                    >
                      <Image
                        style={styles.profileImg}
                        source={require("./assets/images/test.png")}
                      />
                      <Text style={{ fontSize: 10 }}>Jasimy</Text>
                    </View>
                    <View
                      style={{
                        width: "85%",
                        marginLeft: 40,
                        borderColor: "#e6e6e6",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderTopLeftRadius: 0,
                        padding: 3
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "gray" }}>
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트
                        댓글 테스트 댓글 테스트 댓글 테스트 댓글 테스트 댓글
                        테스트 댓글 테스트
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <TextInput
                style={styles.textinput}
                placeholder="댓글 입력"
                value={this.state.reply}
                onChangeText={text => {
                  this.setState({ reply: text });
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  profileDiv: {
    width: "100%",
    height: 180,
    marginTop: 10,
    borderColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  bigProfileImg: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  content: {
    width: "100%",
    height: 650,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  upper: {
    width: "100%",
    height: 60,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8
  },
  mid: {
    width: "100%",
    height: 400
  },
  lower: {
    width: "100%",
    height: 190,
    paddingTop: 14,
    paddingBottom: 4,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  withReply: {
    height: 115,
    width: "92%"
  },
  textinput: {
    width: "92%",
    height: 50,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 6,
    borderColor: "#e6e6e6",
    borderWidth: 1
  }
});

export default User;
