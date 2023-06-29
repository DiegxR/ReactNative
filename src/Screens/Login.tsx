import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Login() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#db5729',
    fontWeight: '600',
    fontSize: 50
  },
  image: {
    height: 200,
    width: 200
  }
});