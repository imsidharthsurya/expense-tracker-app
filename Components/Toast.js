import { View, Text, StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Toast = ({ handleToastClose }) => {
  return (
    <View style={styles.toastOuter}>
      <View style={styles.toastcont}>
        <Text style={styles.toastText}>Goal Added Successfully!</Text>
        <Pressable onPress={handleToastClose}>
          <Entypo name="cross" size={34} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  toastOuter: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  toastcont: {
    backgroundColor: "green",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  toastText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
