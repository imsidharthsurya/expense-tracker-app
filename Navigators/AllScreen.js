import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import RecentExpenses from "../Screens/RecentExpenses";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";

const Tab = createBottomTabNavigator();
const AllScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#b6d3f0",
        headerStyle: {
          backgroundColor: "#1d538a",
        },

        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1d538a",
        },
        tabBarPressColor: "transparent",
        headerRight: () => {
          return <Header />;
        },
      }}
    >
      <Tab.Screen
        name="recentExpenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="calendar" size={24} color={color} />;
          },
          title: "Recent Expenses",
        }}
      />
      <Tab.Screen
        name="allExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="hourglass" size={24} color={color} />;
          },
          title: "All Expenses",
        }}
      />
    </Tab.Navigator>
  );
};

export default AllScreen;
