import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
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

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <Image source={require('./assets/male_sprite.png')} style={{ width: 450, height: 450 }} />
      {/* <Image source={require('./assets/female_sprite1.png')} style={{ width: 250, height: 250 }} /> */}
    </View>
  );
}

function QuestsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quests Screen!</Text>
    </View>
  );
}

function ShopScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shop Screen!</Text>
    </View>
  );
}

function WardrobeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wardrobe Screen!</Text>
    </View>
  );
}

function FriendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Friends Screen!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HOME" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SETTINGS" component={SettingsScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}


const QuestsStack = createNativeStackNavigator();

function QuestsStackScreen() {
  return (
    <QuestsStack.Navigator>
      <QuestsStack.Screen name="QUESTS" component={QuestsScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </QuestsStack.Navigator>
  );
}

const ShopStack = createNativeStackNavigator();
function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="SHOP" component={ShopScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </ShopStack.Navigator>
  );
}

const WardrobeStack = createNativeStackNavigator();
function WardrobeStackScreen() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen name="WARDROBE" component={WardrobeScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </WardrobeStack.Navigator>
  );
}

const FriendsStack = createNativeStackNavigator();
function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="FRIENDS" component={FriendsScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </FriendsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false, tabBarActiveTintColor: '#533483', tabBarInactiveTintColor: 'gray',
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
        <Tab.Screen name="Shop" component={ShopStackScreen} options={{
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