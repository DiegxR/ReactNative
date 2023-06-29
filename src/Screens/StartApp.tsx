import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Router/AppRouter';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
const StartApp: React.FC<HomeScreenProps> = ({navigation}) => {
useEffect(() => {
    setTimeout(()=>{
        navigation.navigate('Login')
    },2000)
}, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('../../assets/burger-svgrepo-com.svg')}/>
      <Text style={styles.title}>Gourmet experience</Text>
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

export default StartApp