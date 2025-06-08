import { View, Text, StyleSheet } from "react-native";

const ExpenseCard = ({ id, name, date, amount }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardNameContainer}>
        <Text style={styles.expenseText}>{name}</Text>
        <Text style={styles.expenseText}>{date}</Text>
      </View>
      <View style={styles.cardAmountContainer}>
        <Text style={styles.expenseText}>{amount}</Text>
      </View>
    </View>
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
    fontSize: 20,
  },
  cardNameContainer: {
    gap: 10,
  },
  cardAmountContainer: {
    backgroundColor: "#2a79c9",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
});
