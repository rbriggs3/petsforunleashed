import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Icon from 'react-bootstrap-icons';

import FBAuth from "./components/FBAuth";
import Home from './screens/Home';
import About from './screens/About';
import Adopt from './screens/Adopt';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import Donate from './screens/Donate';
import Profile from './screens/Profile';
import Shop from './screens/Shop';

const Drawer = createDrawerNavigator();

WebBrowser.maybeCompleteAuthSession();

const styles = {
  HeaderIcon: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 5,
      paddingLeft: 5
  }
}

function Logo() {
  return (
    <View style={{flexDirection:"row"}}>
      <Text 
        style={{
          fontSize: 15,
          fontWeight:"bold"
          }}
            >Pets</Text>
      <Image
        style={{
          resizeMode: "contain",
          height: 25,
          width: 25,
          marginLeft: 5,
          marginRight: 5
        }}
        source={require('./img/paw.png')}
      />
      <Text
        style={{
          fontSize: 15,
          fontStyle:"italic",
          fontWeight:"bold"
          }}>
            for Unleashed</Text>
    </View>
  );
}

function NavRight({navigation}) {
  return (
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile') }>
        <Icon.PersonCircle color="#d4d4d4" size={30} style={styles.HeaderIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Shop') }>
        <Icon.BagHeart color="#d4d4d4" size={30} style={styles.HeaderIcon}/>
      </TouchableOpacity>
    </View>
  );
}

function App({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
        <Drawer.Screen name="Login" component={FBAuth} options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false
          }}
        />
        <Drawer.Screen name="Home" component={Home} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="About" component={About} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Adopt" component={Adopt} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Blog" component={Blog} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Contact" component={Contact} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Donate" component={Donate} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Profile" component={Profile} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
        <Drawer.Screen name="Shop" component={Shop} options={({ navigation }) => ({
            headerTitle: props => <Logo {...props}/>,
            headerRight: props => <NavRight {...props}/>,
            headerTitleAlign: 'center'
            })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;