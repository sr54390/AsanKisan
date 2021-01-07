import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import CheckBox from "react-native-check-box";
import { db } from "../../Firebase";
import Weather from "../Weather";
import Firebase from "../../Firebase";
import Header from "../../components/Header";
import Weather4Guides from "../Weather4Guides";
import Icon from "react-native-vector-icons/Ionicons";

import ProgressBarAnimated from "react-native-progress-bar-animated";
import { Audio } from "expo-av";
const { width: WIDTH } = Dimensions.get("window");

export default class GuideWheatstep2 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: {},
      presentToDo2: "",
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  playAudio = async (audio_name) => {
    console.log(audio_name);
    if (audio_name === "Plough the farm") {
      const { sound } = await Audio.Sound.createAsync(
        require("./../../res/raw/Plough_the_farm.mp3")
      );
      //  setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    } else if (audio_name === "Water the Farm") {
      const { sound } = await Audio.Sound.createAsync(
        require("./../../res/raw/water_the_farm.mp3")
      );
      //  setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    } else if (audio_name == "Wait for 10 days") {
      const { sound } = await Audio.Sound.createAsync(
        require("./../../res/raw/wait_for_ten_days.mp3")
      );
      //  setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    } else if (audio_name == "Again Plough the Farm") {
      const { sound } = await Audio.Sound.createAsync(
        require("./../../res/raw/again_Plough_the_farm.mp3")
      );
      //  setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    } else {
      console.log("hello");
    }
  };

  // audio = () =>{
  //   Sound.setCategory('Playback');

  //   var mySound = new Sound('da.mp3',Sound.MAIN_BUNDLE,(error)=>{
  //     if(error){
  //     console.log('Error loading sound: ' + error);
  //     return;
  //     }else{
  //     mySound.play((success)=>{
  //     if(success){
  //     console.log('Sound playing')
  //     }else{
  //     console.log('Issue playing file');
  //     }
  //     })
  //     }
  //     });
  //     mySound.setVolume(0.9);
  //     mySound.release();

  // }

  currentUser() {
    firebase.auth().createUserWithEmailAndPassword.then((data) => {
      console.log("User:", data.user.uid);
    });
  }

  onNextpressing() {
    this.props.navigation.navigate("wheatstep3");
    // db.ref.child("./currentScreen").setValue("3");
  }
  onHomePage() {
    this.props.navigation.navigate("Dashboard");
    // db.ref.child("./currentScreen").setValue("2");
    //   Alert.alert('Data has been Saved');
  }

  componentDidMount() {
    db.ref("/WheatGuideStep2").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};

      let todoItems = { ...data };
      console.log(data);
      this.setState({
        todos: todoItems,
      });
    });
  }

  addNewTodo() {
    db.ref("/WheatGuideStep2").push({
      done: false,
      todoItem: this.state.presentToDo2,
    });
    Alert.alert("Action!", "A new To-do item was created");
    this.setState({
      presentToDo: "",
    });
  }

  clearTodos() {
    db.ref("/WheatGuideStep2").remove();
  }

  render() {
    let todosKeys = Object.keys(this.state.todos);
    const barWidth = Dimensions.get("screen").width - 30;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Image
          source={require("../../assets/wheat.jpg")}
          style={{
            width: "100%",
            height: 100,
          }}
        />

        <View style={styles.containerOK}>
          <ProgressBarAnimated
            width={barWidth}
            value="0"
            backgroundColorOnComplete="#6CC644"
          />
          <Text style={{ fontWeight: "bold" }}>0% Completed</Text>
          <Weather4Guides />
          <Text style={styles.mainHeadings}>Wheat Guide </Text>
          <Text style={styles.mainHeadings}>Step 2 </Text>
          <Text style={styles.mainHeadings}>
            Making fields ready for cultivation{" "}
          </Text>
        </View>
        {/* <TextInput
          placeholder="Add new Todo"
          value={this.state.presentToDo}
          style={styles.textInput}
          onChangeText={e => {
            this.setState({
              presentToDo2: e,
            });
          }}
          onSubmitEditing={this.addNewTodo}
         
        /> */}
        <View>
          {todosKeys.length > 0 ? (
            todosKeys.map((key) => (
              <ToDoItem
                key={key}
                id={key}
                todoItem={this.state.todos[key]}
                funcs={this.playAudio}
              />
            ))
          ) : (
            <Text>No todo item</Text>
          )}
        </View>
        {/* <View style={{flexDirection:"row"}}>
        <Button
          title="Done"
          onPress={this.addNewTodo}
          color="lightgreen"
        />

        
          <Button title="Undone" onPress={this.clearTodos} color="red" />
        
        </View> */}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.Stepbtn}>
            <Text
              style={{ color: "#FFF", fontWeight: "500" }}
              onPress={() => this.onNextpressing()}
            >
              {" "}
              Go to Step 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Stepbtn}
            onPress={() => this.onHomePage()}
          >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>
              {" "}
              End Tutorial
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const ToDoItem = ({ todoItem: { todoItem: name, done }, id, funcs }) => {
  const [doneState, setDone] = useState(done);

  const onCheck = () => {
    setDone(!doneState);
    db.ref("/WheatGuideStep2").update({
      [id]: {
        todoItem: name,
        done: !doneState,
        user: Firebase.getUid(),
      },
    });
  };
  return (
    <View style={styles.todoItem}>
      <CheckBox
        checkBoxColor="skyblue"
        onClick={onCheck}
        isChecked={doneState}
        // disabled={doneState}
        user={{
          _id: Firebase.getUid(),
        }}
      />
      <Text style={[styles.todoText, { opacity: doneState ? 0.2 : 1 }]}>
        {name}
      </Text>
      <TouchableOpacity
        style={{ height: 20, width: 40 }}
        onPress={() => funcs(name)}
      >
        <Icon
          style={{ left: 10 }}
          name={"ios-play"}
          size={28}
          color={"black"}
        />
      </TouchableOpacity>
      

      {/* <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => {
            this.webview.injectJavaScript(
              'document.getElementById("audio").play();'
            );
          }}
        >
          <Icon
          style={{left:10}}
          name={"ios-play"}
          size={28}
          color={"black"}
          />
        </TouchableOpacity> 
        <WebView
          ref={(ref) => (this.webview = ref)}
          originWhitelist={["*"]}
          mediaPlaybackRequiresUserAction={true} // Allow autoplay
          useWebKit={true}
          source={{
            html:
              '<audio id="audio" > <source src="https://go.transportili.app/static/sounds/ring.mp3" type="audio/mp3" /> </audio>',
          }}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    alignItems: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#afafaf",
    width: "80%",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  todoText: {
    borderColor: "#afafaf",
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: "50%",
    textAlign: "center",
  },
  Stepbtn: {
    marginTop: 5,
    padding: 20,
    width: "40%",
    borderRadius: 10,
    backgroundColor: "brown",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  containerOK: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeadings: {
    fontSize: 18,
    // margin:10,
    fontWeight: "bold",
  },
});
