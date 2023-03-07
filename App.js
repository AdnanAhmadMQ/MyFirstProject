import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
//export ANDROID_SDK=C:\Users\adnan\AppData\Local\Android\Sdk
//use npm start or npm run andrioid 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Its working this isn't a warning gz u got it running gj</Text>
      <StatusBar style="auto"/>
      <View style={styles.viewButton}>
        <Button
        onPress={() => alert('Button pressed')}
        title="Learn More"
        color="red"
        />
      </View>
    </View>
    // <Button
    // onPress={() => alert('Button pressed')}
    //  title="Learn More"
    //  color="red"
    //  />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
  },
  view1: {
    flex: 2,
    backgroundColor: "yellow",
  },
  view2: {
    flex: 3,
    backgroundColor: "green",
  },

});
