import React, { Component } from 'react';
import { Image, Text, View, ScrollView ,StyleSheet} from 'react-native';
// import { connect } from 'react-redux';
import { List, ListItem, Right, Body, CheckBox } from 'native-base';
import * as firebase from "firebase";

// const onButtonPress = (checkList, course) => {
//     const { currentUser } = firebase.auth();

//     firebase.database().ref(`/users/${currentUser.uid}/WheatGuide`)
//          .set({
//                  checked: !checkList.Year1[steps].checked
//                });
// };

export default class testing2 extends Component{
    constructor(){
        super();
    this.state={
        checked:false,
        todo1:'Water The Plants',
        value2:true,
        todo2:'Water Yourself',
        value2:false,
        todo2:'Water Others',


    };}

componentDidMount(){
    console.log(this.state.check);
}
onCheck(){
    this.setState({
        checked: !this.state.value2,
        
});
}
    render(){
        return(<View>
            <View style={{flexDirection:"row", marginTop:80}}>
            <CheckBox
        checkBoxColor="skyblue"
        onChange={this.onCheck}
        value={this.state.value2}
        
      />
           </View>
        </View>);

    }


}
const styles = StyleSheet.create({
    
})