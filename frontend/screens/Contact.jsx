import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Icon from 'react-bootstrap-icons';

const styles = StyleSheet.create({
    button: {
      marginBottom: 20,
      padding: 30
    },
    space: {
      width: 20,
      height: 20,
    },
})

function Contact() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/petsforunleashed/') }>
            <Icon.Instagram size={75}/>
          </TouchableOpacity>
        </View>
        <View style={styles.space}/>
        <View>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:tmcowley@live.com?subject=Conctact: Pets For Unleashed') }>
            <Icon.Mailbox size={75}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

  export default Contact;