import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Alert, ToastAndroid, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TextInput style={{borderWidth: 1}} />

        <TouchableOpacity onPress={() => Alert.alert("Welcome")} >
            <Text>LOG IN</Text>
        </TouchableOpacity>

      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
        ]}
      />

        <Button
            onPress={() => { console.log("Button is pressed") }}
            title="Press Me"
        />

        <Button
            onPress={() => { ToastAndroid.show("Hello World!", ToastAndroid.SHORT)}}
            title="Log in (less intrusive)"
        />

        <Button
            onPress={() => { Alert.alert("Hello World!")}}
            title="Log in (attention grabbing)"
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
