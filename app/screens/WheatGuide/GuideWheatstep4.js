


import React, {useState} from 'react';
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
  Image,Dimensions
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {db} from '../../Firebase';
import Weather4Guides from "../Weather4Guides";
import Icon from "react-native-vector-icons/Ionicons";

import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class GuideWheatstep4 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: {},
      presentToDo4: '',
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  componentDidMount() {
    db.ref('/WheatGuideStep4').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};

      let todoItems = {...data};
      console.log(data);
      this.setState({
        todos: todoItems,
      });
    });
  }

  addNewTodo() {
    db.ref('/WheatGuideStep4').push({
      done: false,
      todoItem: this.state.presentToDo4,
    });
    Alert.alert('Action!', 'A new To-do item was created');
    this.setState({
      presentToDo4: '',
    });
  }

  clearTodos() {
    db.ref('/WheatGuideStep4').remove();
  }

  render() {
    let todosKeys = Object.keys(this.state.todos);
    const barWidth = Dimensions.get("screen").width - 30;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
           <Image
            source={require("../../assets/wheat.jpg")}
            style={{
              width: "100%",
              height: 100,
            }}
          />
            <ProgressBarAnimated
            width={barWidth}
            value="30"
            backgroundColorOnComplete="#6CC644"
          />
          <Text style={{ fontWeight: "bold" }}>30% Completed</Text>
          <Weather4Guides />
          
       
        <View style={styles.containerOK}>
                 <Text style={styles.mainHeadings}>Wheat Guide  </Text>
                 <Text style={styles.mainHeadings}>Step 4  </Text>
                 <Text style={styles.mainHeadings}>Watering and sprays </Text>
</View>
        {/* <TextInput
          placeholder="Add new Todo"
          value={this.state.presentToDo}
          style={styles.textInput}
          onChangeText={e => {
            this.setState({
              presentToDo4: e,
            });
          }}
          onSubmitEditing={this.addNewTodo}
        /> */}
 <View>
          {todosKeys.length > 0 ? (
            todosKeys.map(key => (
              <ToDoItem
                key={key}
                id={key}
                todoItem={this.state.todos[key]}
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
       <TouchableOpacity style={styles.Stepbtn} >
        <Text style={{color:"#FFF",fontWeight:"500"}} onPress={()=> {this.props.navigation.navigate("wheatstep5")}}> Go to Step 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Stepbtn}  onPress={()=> {this.props.navigation.navigate("Dashboard")}} >
        <Text style={{color:"#FFF",fontWeight:"500"}}> End Tutorial</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
  const [doneState, setDone] = useState(done);

  const onCheck = () => {
    setDone(!doneState);
    db.ref('/WheatGuideStep4').update({
      [id]: {
        todoItem: name,
        done: !doneState,
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
      />
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
btnContainer:{flexDirection:"row"},
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: '50%',
    textAlign: 'center',
    
  },
  Stepbtn: {
    marginTop:5,
    padding: 20,
    width: "40%",
    borderRadius:10,
    backgroundColor:"brown",
    alignItems:"center",
    alignContent:"center",
    justifyContent:"space-between",
    margin:10
                      },
                      containerOK: {
                                            flex: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                          },
                                          mainHeadings:{
                                                                  fontSize:18,
                                                                  margin:10,
                                                                  fontWeight:"bold"
                                                              },
});
