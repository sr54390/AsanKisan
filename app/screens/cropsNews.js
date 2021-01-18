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
  } from "react-native";
  
  import { db } from "../Firebase";
  import CheckBox from "react-native-check-box";
  import Firebase from "../Firebase";
  import Icon from "react-native-vector-icons/Ionicons";
import { Notifications } from 'expo';
 
  
  
  
  
  
  
  
  
  
  export default class cropsNews extends Component {
    constructor() {
        super();
        this.state = {
          todos: {},
          Title: "",
          Description:""
          
        };
    
        // this.addNewTodo = this.addNewTodo.bind(this);
        // this.clearTodos = this.clearTodos.bind(this);
      }
      componentDidMount() {
        db.ref("/CropsNews").on("value", (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
    
          let titleNews = { ...data };
          console.log(data);
          this.setState({
            todos: titleNews,
            
          });
        });
      }
    //   addNewTodo() {
    //     db.ref("/CropsNews").push({
         
    //       titleNews: this.state.Title,
    //       descriptionNews: this.state.Description
       
         
    //     });
    //     Alert.alert("Congrats!", "Notifications has been sent");
    //     this.setState({
    //         Title: "",
    //         Description:""
    //     });
    //   }
    
    //   clearTodos() {
    //     db.ref("/CropsNews").remove();
    //   }    


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
            
              {/* <TextInput
                placeholder="Enter a title"
                value={this.state.Title}
                style={styles.textInput}
                onChangeText={e => {
                  this.setState({
                    Title: e,
                  });
                }}
                onSubmitEditing={this.addNewTodo}
               
              />
               <TextInput
                placeholder="Enter a Description"
                value={this.state.Description}
                style={styles.textInput}
                onChangeText={e => {
                  this.setState({
                    Description: e,
                  });
                }}
                onSubmitEditing={this.addNewTodo}
               
              />
               <Button
                title="Post"
                onPress={this.addNewTodo}
                color="black"
              /> */}
              
              <View>
                {todosKeys.length > 0 ? (
                  todosKeys.map((key) => (
                    <ToDoItem
                      key={key}
                      id={key}
                      titleNews={this.state.todos[key]}
                      
                      
                    />
                  ))
                ) : (
                  <Text>No new posts</Text>
                )}
              </View>
              <View style={{flexDirection:"row"}}>
             
             
              {/* <Button
                title="Delete all Notifications"
                onPress={this.clearTodos}
                color="grey"
              /> */}
              
               
              
              </View>
              
            </ScrollView>
          );
        }
      }
      
      const ToDoItem = ({ titleNews: { titleNews: title, done, descriptionNews:description }, id, funcs }) => {
        const [doneState, setDone] = useState(done);
      
        const onCheck = () => {
          setDone(!doneState);
          db.ref("/CropsNews").update({
            [id]: {
                titleNews: title,
                descriptionNews:description,
              done: !doneState,
              user: Firebase.getUid(),
              createdAt: new Date(message.createdAt),
              
            },
          });
        };
        return (
          
          <View style={styles.todoItem}>
           <View style={{flexDirection:"row"}}> 
            <View style={{
  height: 30,
  width: 30,
  borderRadius: 30,
  backgroundColor:"#000",
  justifyContent:"center",
  alignItems:"center",marginRight:5,
  marginLeft:5
}}>
 <Icon name={"md-book"} size={20} color={"#f0a500"} />
            </View>
            <Text style={styles.titleText}>
              {title} 
            </Text>
            </View>
            <Text style={styles.descriptionText}>
               {description}
            </Text>
            
      
           
          </View>
        );
  }
  const styles = StyleSheet.create({
    btnContainer: {
      flexDirection: "row",
    },
    container: {
      flex: 1,
      backgroundColor: "#825959",
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
        borderColor: "#23120b",
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 28,
        minWidth: "50%",
        textAlign: "center",
        fontWeight:"bold",
        marginLeft:5,
      marginVertical: 10,
      backgroundColor:"#f9f7cf",
      marginLeft:25
     
    },
     titleText: {
        
        fontWeight:"bold",
        fontSize:23
      },
    descriptionText: {
      fontSize:20
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
  