import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Splash from '../../assets/images/splash.jpeg';
import {CHARACTER_CHOOSE_NAME} from '../../constants/constants';
export default function SplashScreen({}) {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      //   Alert.alert('I am appearing...', 'After 5 seconds!');
      navigation.navigate(CHARACTER_CHOOSE_NAME);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        //src/assets/images/splash.jpeg
        // source={require('././images/splash.jpeg')}
        source={Splash}
        style={styles.backgroundImage}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
    resizeMode: 'stretch',
  },
});
