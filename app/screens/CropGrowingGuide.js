import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppButton from "../components/AppButton";

function CropGrowingGuide({ navigation }) {
  return (
    <View>
      <View style={{ elevation: 4, margin: 10 }}>
        <View
          onPress={() => {
            navigation.navigate("WheatGuide");
          }}
        >
          <Image
            source={require("../assets/wheat.jpg")}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
        <View style={styles.title}>
          <AppButton
            style={{ fontcolor: "#000" }}
            title="Wheat Guide"
            color="backgroundColor"
            change={() => {
              navigation.navigate("WheatGuide");
            }}
          />
        </View>
      </View>

      <View style={{ elevation: 4, margin: 10 }}>
        <View>
          <Image
            source={require("../assets/rice.jpg")}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
        <View style={styles.title}>
          <AppButton
            style={{ fontcolor: "#000" }}
            title="Rice Guide"
            color="backgroundColor"
            change={() => {
              navigation.navigate("RiceGuide");
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{ fontSize: 20, alignSelf: "center", fontFamily: "serif" }}
        >
          More Guides are Comming Soon
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "red",
    fontFamily: "serif",
    width: "100%",
    borderRadius: 100,
  },
});
export default CropGrowingGuide;
