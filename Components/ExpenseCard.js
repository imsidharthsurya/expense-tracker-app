import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useState } from "react";
import EditExpense from "./EditExpense";

const ExpenseCard = ({ id, name, date, amount }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleExpensePress = (id) => {
    console.log("expense clicked: ", id);
    setShowEdit(true);
  };
  return (
    <>
      <Pressable
        style={styles.card}
        android_ripple={{ color: "#2a79c9" }}
        onPress={() => handleExpensePress(id)}
      >
        <View style={styles.cardNameContainer}>
          <Text
            style={styles.expenseText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name.length > 13 ? name.substring(0, 13) + "..." : name}
          </Text>
          <Text style={styles.expenseDate}>{date}</Text>
        </View>
        <View style={styles.cardAmountContainer}>
          <Text style={styles.expenseText}>{amount}</Text>
        </View>
      </Pressable>
      <Modal visible={showEdit}>
        <EditExpense id={id} name={name} setShowEdit={setShowEdit} />
      </Modal>
    </>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#619fde",
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expenseText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  expenseDate: {
    color: "white",
    fontSize: 15,
  },
  cardNameContainer: {
    gap: 10,
  },
  cardAmountContainer: {
    backgroundColor: "#2a79c9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 5,
  },
});
