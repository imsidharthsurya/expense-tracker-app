import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllScreen from "./Navigators/AllScreen";
import AddExpense from "./Screens/AddExpense";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1d538a",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="home"
          component={AllScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add expense"
          component={AddExpense}
          options={{
            title: "Add Expense",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
