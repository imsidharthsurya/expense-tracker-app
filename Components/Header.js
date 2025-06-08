import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const handleAddPress = () => {
    navigation.navigate("Add expense");
  };
  return (
    <Pressable
      style={{ paddingRight: 16 }}
      android_ripple={{ color: "gray" }}
      onPress={handleAddPress}
    >
      <Ionicons name="add-circle" size={34} color="white" />
    </Pressable>
  );
};

export default Header;
