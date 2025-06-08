import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import RecentExpenses from "../Screens/RecentExpenses";

const Tab = createBottomTabNavigator();
const AllScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="allExpenses" component={AllExpenses} />
      <Tab.Screen name="recentExpenses" component={RecentExpenses} />
    </Tab.Navigator>
  );
};

export default AllScreen;
