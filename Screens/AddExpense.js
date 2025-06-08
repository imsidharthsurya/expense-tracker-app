import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
import Toast from "../Components/Toast";

const AddExpense = () => {
  const [allData, setAllData] = useState({
    name: "",
    date: "",
    amount: "",
  });
  const [showToast, setShowToast] = useState(false);
  const handleAddGoal = () => {
    console.log("goal to add is: ", allData);
    setAllData({
      name: "",
      date: "",
      amount: "",
    });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  const handleChange = (value, inputField) => {
    setAllData((prevData) => {
      return { ...prevData, [inputField]: value };
    });
  };

  const handleToastClose = () => {
    setShowToast(false);
  };
  return (
    <View style={styles.mainCont}>
      <Text style={styles.title}>Add Expense</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="expense name"
          onChangeText={(text) => handleChange(text, "name")}
          value={allData.name}
          style={styles.txtInput}
        />
        <TextInput
          placeholder="expense amount"
          onChangeText={(text) => handleChange(text, "amount")}
          value={allData.amount}
          style={styles.txtInput}
        />
        <TextInput
          placeholder="date"
          onChangeText={(text) => handleChange(text, "date")}
          value={allData.date}
          style={styles.txtInput}
        />
        <Pressable style={styles.btn} onPress={handleAddGoal}>
          <Text style={styles.btnText}>Add Goal</Text>
        </Pressable>
      </View>
      {showToast && <Toast handleToastClose={handleToastClose} />}
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 48,
    marginVertical: 20,
    color: "#1d538a",
    fontWeight: "bold",
  },
  txtInput: {
    borderWidth: 1,
    marginVertical: 20,
    width: "70%",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: "#2a79c9",
    alignItems: "stretch",
    marginTop: 10,
    borderRadius: 6,
    elevation: 6,
  },
  btnText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
