import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ExpenseCard from "../Components/ExpenseCard";

const RecentExpenses = () => {
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

export default RecentExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  expenseList: {
    width: "80%",
    marginBottom: 220,
  },
});
