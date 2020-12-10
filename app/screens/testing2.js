import React, { Component , useState} from 'react';
import { Image, Text, View, ScrollView ,StyleSheet, SnapshotViewIOS} from 'react-native';
// import { connect } from 'react-redux';
import { List, ListItem, Right, Body, CheckBox } from 'native-base';
import * as firebase from "firebase";
import Firebase, { db } from '../Firebase';

// const onButtonPress = (checkList, course) => {
//     const { currentUser } = firebase.auth();

//     firebase.database().ref(`/users/${currentUser.uid}/WheatGuide`)
//          .set({
//                  checked: !checkList.Year1[steps].checked
//                });
// };

export default class testing2 extends Component{
    state={
        checked:"",
        


    }



componentDidMount(){
    db.ref('/Wheat').on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val().done : {};
  
        const done = {...data};
        console.log(data);
    //    this.setState({
    //          checked : done 
    //     });
      });
}


        
onCheck(){

console.log(this.state.checked);
this.setState({checked: !this.state.checked})
db.ref('/Wheat').update({
    [id]:{
        

        // todoItem : name,
        done : this.state.checked,
        user: Firebase.getUid()

    }
})

}





    render(){
//         const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
//         const [doneState, setDone] = useState(false);

// const onCheck = () => {
  
//   setDone(!doneState);
// //   db.ref('/WheatGuideStep2').update({
    
// //     // [id]: {
// //     //   todoItem: name,
// //     //   done: !doneState,
// //     //   user: Firebase.getUid()
// //     // }
    
// //     });
// }
// }
    return(<View>
           
  
  <View style={{ flexDirection: 'row', margin:20 }}>
  <CheckBox
          title="Press me"
          checked={this.state.checked}
          onPress={() => this.onCheck()}
          
        />
    <Text style={{margin:20}}> this is checkbox</Text>
  </View>

      {/* <Text>
          Plough The Farm !!
      </Text>
           </View>


           <View style={{flexDirection:"row", marginTop:80}}>
            <CheckBox
        checkBoxColor="skyblue"
        onChange={this.onCheck}
        value={this.state.value2}
        
      />
      <Text>
          Water The Farm !!
      </Text>
           </View>



           <View style={{flexDirection:"row", marginTop:80}}>
            <CheckBox
        checkBoxColor="skyblue"
        onChange={this.onCheck}
        value={this.state.value2}
        
      />
      <Text>
          Harvest The Farm !!
      </Text> */}
           

        </View>);

    }


}
const styles = StyleSheet.create({
    
})