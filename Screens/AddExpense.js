import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import Toast from "../Components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, editExpense } from "../store/expenseSlice";
import DateTimePicker from "@react-native-community/datetimepicker";

const generateId = () =>
  Date.now().toString() + Math.random().toString(36).substr(2, 9);

const AddExpense = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const allExpense = useSelector((store) => store.expense.expenses);

  const isEdit = route?.params?.isEdit;
  const expenseId = route?.params?.expenseId;

  const onChange = (event, selectedDate) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
      handleChange(selectedDate.toISOString().split("T")[0], "date");
    }
  };

  useEffect(() => {
    if (isEdit) {
      navigation.setOptions({
        title: "Edit Expense",
      });
      const expense = allExpense.filter((expense) => {
        return expense.id === expenseId;
      });
      setAllData(expense[0]);
    }
  }, [isEdit, expenseId]);
  const [allData, setAllData] = useState({
    id: "",
    name: "",
    date: "",
    amount: "",
  });
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const handleAddGoal = () => {
    if (
      allData.name.trim() === "" ||
      allData.date.trim() === "" ||
      allData.amount.trim() === ""
    ) {
      Alert.alert("Invalid Data", "Input field cannot be empty", [
        {
          text: "Okay",
        },
      ]);
      return;
    }
    if (isEdit) {
      //edit the expense
      console.log("in edit data is: ", allData);
      dispatch(editExpense(allData));
    } else {
      // add the expense to redux store
      const expenseObj = {
        ...allData,
        id: generateId(),
      };
      dispatch(addExpense(expenseObj));
      // clear data only case of add expense
      setAllData({
        id: "",
        name: "",
        date: "",
        amount: "",
      });
    }

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
        <Pressable style={styles.calendar} onPress={() => setShowPicker(true)}>
          <Text>{allData.date || "Select Date"}</Text>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </Pressable>

        <Pressable style={styles.btn} onPress={handleAddGoal}>
          <Text style={styles.btnText}>
            {isEdit ? "Edit Expense" : "Add Expense"}
          </Text>
        </Pressable>
      </View>
      {showToast && (
        <Toast handleToastClose={handleToastClose} isEdit={isEdit} />
      )}
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
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    padding: 80,
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#2a79c9",
    alignItems: "stretch",
    marginTop: 10,
    borderRadius: 6,
    elevation: 6,
  },
  btnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  calendar: {
    borderWidth: 1,
    marginVertical: 20,
    width: "70%",
    padding: 10,
  },
});
