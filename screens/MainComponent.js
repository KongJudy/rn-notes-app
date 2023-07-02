import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import JournalScreen from './JournalScreen';
import NotesScreen from './NotesScreen';
import RemindersScreen from './RemindersScreen';
import ShoppingListScreen from './ShoppingListScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: '#fff',
  headerStyle: { backgroundColor: '#947fdb' }
};

const drawerOptions = {
  activeTintColor: '#e1e7cf',
  activeBackgroundColor: '#947fdb',
  inactiveTintColor: '#947fdb',
  inactiveBackgroundColor: '#e1e7cf'
};

const ShoppingListNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='ShoppingList'
        component={ShoppingListScreen}
        options={{ title: 'Shopping List' }}
      />
    </Stack.Navigator>
  );
};

const RemindersNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOption={screenOptions}>
      <Stack.Screen
        name='Reminder'
        component={RemindersScreen}
        options={{ title: 'Reminders' }}
      />
    </Stack.Navigator>
  );
};

const NotesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Notes'
        component={NotesScreen}
        options={{ title: 'Notes' }}
      />
    </Stack.Navigator>
  );
};

const JournalNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Journal'
        component={JournalScreen}
        options={{ title: 'Journal' }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#43b2b6' }}
        drawerContentOptions={drawerOptions}
      >
        <Drawer.Screen
          name='Home'
          component={HomeNavigator}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name='Journal'
          component={JournalNavigator}
          options={{ title: 'Journal' }}
        />
        <Drawer.Screen
          name='Notes'
          component={NotesNavigator}
          options={{ title: 'Notes' }}
        />
        <Drawer.Screen
          name='Reminders'
          component={RemindersNavigator}
          options={{ title: 'Reminders' }}
        />
        <Drawer.Screen
          name='ShoppingList'
          component={ShoppingListNavigator}
          options={{ title: 'Shopping List' }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
