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

function Blog() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View/>
        <Text>Blog Coming Soon!</Text>
      </View>
    );
}

  export default Blog;