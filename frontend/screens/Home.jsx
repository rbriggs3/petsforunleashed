import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";

import boys from '../img/boys.jpg'

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

function JaxAndZed() {
    return (
      <Image
        style={{ width: 100, height: 100 }}
        source={boys}
      />
    );
}

function Home() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View/>
        <JaxAndZed style={styles.space}/>
        <Text>Coming Soon!</Text>
      </View>
    );
}

  export default Home;