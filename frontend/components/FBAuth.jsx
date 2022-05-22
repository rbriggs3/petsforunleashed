import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import * as Icon from 'react-bootstrap-icons';

WebBrowser.maybeCompleteAuthSession();

function FBAuth({ navigation }) {
    const FB_APP_ID = process.env.REACT_APP_FB_ID;
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
          console.log(userInfo)
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
            navigation.navigate('Contact')
        ) : (
          <View>
            <TouchableOpacity onPress={handlePressAsync}>
                <Icon.Facebook title="Continue with Facebook" color="#0870ea" size={90}/>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
}

export default FBAuth;