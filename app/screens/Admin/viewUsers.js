import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
  } from "react-native";
  
  import * as firebase from "../../Firebase";
 
  
  
  
  
  
  
  
  
  
  export default class viewUsers extends Component {


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
          return(
              <View>
                  <Text>These are users</Text>

                 
          <TouchableOpacity
            style={styles.dashBtn}
            // onPress={this.viewAllUsers}
          >
          
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Send Notification
            </Text>
          </TouchableOpacity>



                  
              </View>
          );
      }
      
  }
  const styles = StyleSheet.create({
    dashBtn: {
        width: 160,
        height: 150,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.7)",
        alignItems: "center",
        alignContent: "center",
        margin: 10,
        paddingTop: 18,
        right: 34,
      },
          
})