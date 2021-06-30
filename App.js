import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Emergency Contacts" component={ContactsScreen}></Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sos}>
        <Text style={styles.sosText}>SOS</Text>
      </View>
      <View style={styles.bottomButtons}>
        <Button title="Emergency Contacts" onPress={ () => navigation.navigate('Emergency Contacts') }/>
      </View>
      <View style={styles.bottomButtons}>
        <Button title="Settings" onPress= { () => navigation.navigate('Settings') }/>
      </View>
    </View>
  );
};

const ContactsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Contacts Screen</Text>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sos: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    backgroundColor: 'red',
    borderRadius: 100,
    marginBottom: 30
  },
  sosText: {
    fontSize: 70,
    fontWeight: 'bold'
  },
  bottomButtons: {
    margin: 10,
    width: 200
  }
});
