import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../store/expenseSlice";

const EditExpense = ({ id, name, setShowEdit }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleEditExpense = () => {
    navigation.navigate("Add expense", {
      isEdit: true,
      expenseId: id,
    });
  };

  const handleDeleteExpense = () => {
    dispatch(deleteExpense(id));
  };
  return (
    <View style={styles.manageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Manage Expense: {name}</Text>
      </View>
      <View style={styles.editContainer}>
        <Pressable style={styles.btn} onPress={handleEditExpense}>
          <Text style={styles.btnText}>Edit</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setShowEdit(false)}>
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
      </View>
      <Pressable style={styles.bin} onPress={handleDeleteExpense}>
        <Ionicons name="trash-bin" size={44} color="red" />
      </Pressable>
    </View>
  );
};

export default EditExpense;

const styles = StyleSheet.create({
  bin: {
    alignSelf: "center",
    marginTop: 35,
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#1d538a",
    elevation: 8,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  manageContainer: {
    alignItems: "center",
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#2a79c9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 8,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "semibold",
  },
});
