import * as React from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";

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

function Shop() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View/>
        <Text>Shop Coming Soon!</Text>
      </View>
    );
}

  export default Shop;