import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Questly" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function QuestsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
function ShopStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
function WardrobeStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
function FriendsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="home-outline" color={'#533483'} size={size} />
          )
        }} />
        <Tab.Screen name="Quests" component={QuestsStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="file-text-o" color={'#533483'} size={size} />
          )
        }} />
        <Tab.Screen name="Shop" component={SettingsStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="building-o" color={'#533483'} size={size} />
          )
        }} />
        <Tab.Screen name="Wardrobe" component={WardrobeStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="wardrobe-outline" color={'#533483'} size={size} />
          )
        }} />
        <Tab.Screen name="Friends" component={FriendsStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="people-outline" color={'#533483'} size={size} />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="settings-outline" color={'#533483'} size={size} />
          )
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}