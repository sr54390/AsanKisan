import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppButton from "../components/AppButton";

function WheatGuide({ navigation }) {
  return (
    <View>
      <View style={{ elevation: 4, margin: 10 }}>
        <View>
          <Image
            source={require("../assets/wheat.jpg")}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "serif",
              marginLeft: 10,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            Planting Wheat
          </Text>
          <Text>
            This guide aims to support understanding and enhancement of wheat
            production through improved management. The steps in any cycle of
            management are to: Measurements are vital to good management and for
            learning. As well as assessing weeds, pests and diseases, crop
            managers must assess the crop itself. Crop progress, structure and
            final performance can then be compared with benchmarks or new
            targets. A crop’s growth best relates to the natural resources it
            captures. By knowing available resources, managers can tell whether
            better or worse than expected growth is due to weather or husbandry.
            Crop assessments should be objective and, where possible, measured.
            This guide presents metrics by which production targets can be set
            and crop progress monitored. It also explains how the metrics
            interrelate and can be influenced.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
export default WheatGuide;
