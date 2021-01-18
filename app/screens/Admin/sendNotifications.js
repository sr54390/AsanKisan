import React, { Component,useState  } from 'react';
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
  ImageBackground
  } from "react-native";
  
  import { db } from "../../Firebase";
  import CheckBox from "react-native-check-box";
  import Firebase from "../../Firebase";
  import Icon from "react-native-vector-icons/Ionicons";
import { Notifications } from 'expo';
 
  
  
  
  
  
  
  
  
  
  export default class sendNotifications extends Component {
    constructor() {
        super();
        this.state = {
          todos: {},
          presentToDo2: "",
          message:""
        };
    
        this.addNewTodo = this.addNewTodo.bind(this);
        this.clearTodos = this.clearTodos.bind(this);
      }
      componentDidMount() {
        db.ref("/Notifications").on("value", (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
    
          let todoItems = { ...data };
          console.log(data);
          this.setState({
            todos: todoItems,
            
          });
        });
      }
      addNewTodo() {
        db.ref("/Notifications").push({
         
          todoItem: this.state.presentToDo2,
       
         
        });
        Alert.alert("Congrats!", "Notifications has been sent");
        this.setState({
          presentToDo: "",
        });
      }
    
      clearTodos() {
        db.ref("/Notifications").remove();
      }    


// viewAllUsers(){
//     admin.auth()
//   .getUser(uid)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Hello");
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
// }
    
      render(){
        let todosKeys = Object.keys(this.state.todos);
        return (
         
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainerStyle}
            >
             <ImageBackground
        source={require("../../assets/notification.png")}
        style={styles.background}
      >
              <TextInput
                placeholder="Send New Notification"
                value={this.state.presentToDo}
                style={styles.textInput}
                onChangeText={e => {
                  this.setState({
                    presentToDo2: e,
                  });
                }}
                onSubmitEditing={this.addNewTodo}
               
              />
                 <View style={{marginLeft:260}}>
              <TouchableOpacity
            style={styles.dashBtn}
            onPress={this.addNewTodo}
          >
           
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                
              }}
            >
               Send
            </Text>
          </TouchableOpacity>
          </View>
              
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
                  <Text>No new notification</Text>
                )}
              </View>
             
          
         
              
               
              
              </ImageBackground>
              
            </ScrollView>
           
          );
        }
      }
      
      const ToDoItem = ({ todoItem: { todoItem: name, done }, id, funcs }) => {
        const [doneState, setDone] = useState(done);
      
        const onCheck = () => {
          setDone(!doneState);
          db.ref("/Notifications").update({
            [id]: {
              todoItem: name,
              done: !doneState,
              user: Firebase.getUid(),
              createdAt: new Date(message.createdAt),
              
            },
          });
        };
        return (
          <View style={styles.todoItem}>
{/*           
            <Text style={[styles.todoText, { opacity: doneState ? 0.2 : 1 }]}>
              {name}
            </Text> */}
            <TouchableOpacity
              style={{ height: 20, width: 40 }}
              onPress={() => funcs(name)}
            >
             
            </TouchableOpacity>
            
      
           
          </View>
        );
  }
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
      borderColor: "#000",
      width: 325,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginLeft: 20,
      marginTop:10,
      fontSize: 20,
      height:"20%",
      backgroundColor:"#fff"
      
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
    dashBtn: {
      width: 100,
      height: 50,
      borderRadius: 12,
      backgroundColor: "black",
      alignItems: "center",
      alignContent: "center",
      margin: 10,
      paddingTop: 18,
      right: 34,
    },
    background: {
      flex: 1,
    },
  });
  