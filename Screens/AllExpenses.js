import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ExpenseCard from "../Components/ExpenseCard";

const AllExpenses = () => {
  const expenses = useSelector((store) => store.expense.expenses);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.expenseList}>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            const { id, name, date, amount } = itemData.item;
            return (
              <ExpenseCard id={id} name={name} date={date} amount={amount} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
  },
  expenseList: {
    width: "80%",
    marginBottom: 20,
    flex: 1,
  },
});
