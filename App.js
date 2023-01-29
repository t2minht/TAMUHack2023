import * as React from 'react';
import { Button, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'
import QuestItems from "./components/QuestItems"


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      {/* <Image source={require('./assets/female_sprite1.png')} style={{ width: 250, height: 250 }} /> */}
      <ImageBackground source={require('./assets/day.png')} style={{ height: 1000, position: 'absolute' }}>
        <Image source={require('./assets/male_sprite.png')} style={{ width: 450, height: 450, position: 'relative', bottom: -400 }} />
      </ImageBackground>
      {/* <Image source={require('./assets/female_sprite1.png')} style={{ width: 250, height: 250 }} /> */}
    </View >
  );
}

function QuestsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <QuestItems />
    </View>
  );
}

function ShopScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <Text>Shop Screen!</Text>
    </View>
  );
}

function WardrobeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <Text>Wardrobe Screen!</Text>
    </View>
  );
}

function FriendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <Text>Friends Screen!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <Text>Settings screen</Text>
    </View>
  );
}



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HOME" component={HomeScreen} options={{ headerShown: false }} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SETTINGS" component={SettingsScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}


const QuestsStack = createNativeStackNavigator();

function QuestsStackScreen() {
  return (
    <QuestsStack.Navigator>
      <QuestsStack.Screen name="QUESTS" component={QuestsScreen} options={{
        headerTintColor: '#F48484',
        headerStyle: { backgroundColor: '#E8D2A6' },
        headerShown: false
      }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </QuestsStack.Navigator>
  );
}

const ShopStack = createNativeStackNavigator();
function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="SHOP" component={ShopScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </ShopStack.Navigator>
  );
}

const WardrobeStack = createNativeStackNavigator();
function WardrobeStackScreen() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen name="WARDROBE" component={WardrobeScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </WardrobeStack.Navigator>
  );
}

const FriendsStack = createNativeStackNavigator();
function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="FRIENDS" component={FriendsScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </FriendsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false, tabBarActiveTintColor: '#F55050', tabBarInactiveTintColor: '#86A3B8',
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="home-outline" color={focused ? "#F55050" : '#86A3B8'} tabBarActiveTintColor={'red'} size={size} />
          )
        }} />
        <Tab.Screen name="Quests" component={QuestsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="file-text-o" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Shop" component={ShopStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="building-o" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Wardrobe" component={WardrobeStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon2 name="wardrobe-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Friends" component={FriendsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="people-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="settings-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}