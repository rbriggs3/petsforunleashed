import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

WebBrowser.maybeCompleteAuthSession();

const FB_APP_ID = process.env.REACT_APP_FB_ID;

function FBAuth({ navigation }) {
  const [user, setUser] = React.useState(null);
  // Request
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: FB_APP_ID,
    responseType: ResponseType.Token,
  })

  if (request) {console.log('REACT_APP_FB_ID', FB_APP_ID)}

  React.useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user ? (
        navigation.navigate('Home')
      ) : (
        <Button
          disabled={!request}
          title="Continue with Facebook"
          color="#0870ea"
          onPress={handlePressAsync}
        />
      )}
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.space} />
      <JaxAndZed/>
      <Text>Home Screen</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => Linking.openURL('https://www.instagram.com/petsforunleashed/') }
        title="Check out our Instagram"
        color="#4f1416"
        />
      <View style={styles.space} />
      <Button onPress={() => Linking.openURL('mailto:tmcowley@live.com?subject=Conctact: Pets For Unleashed') }
      title="Send us an Email"
      color="#4f1416"
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img/paw.png')}
    />
  );
}

function JaxAndZed() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('./img/boys.jpg')}
    />
  );
}

function Profile({ user }) {
  return (
    <Image 
      source={{ uri: user.picture.data.url }}
      style={styles.image}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={FBAuth}
          options={{
            headerShown: () => {false},
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Contact')}
                title="Contact"
                color="#4f1416"
              />
            )
          })}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={({ navigation }) => ({
            headerTitle: props => <LogoTitle {...props} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
