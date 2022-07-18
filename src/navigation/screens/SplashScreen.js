import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import GifImage from '@lowkey/react-native-gif';

// import Splash from '../../assets/images/splash.jpeg';
import {CHARACTER_CHOOSE_NAME} from '../../constants/constants';
export default function SplashScreen({}) {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      //   Alert.alert('I am appearing...', 'After 5 seconds!');
      navigation.navigate(CHARACTER_CHOOSE_NAME);
    }, 3500);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        //src/assets/images/splash.jpeg
        // source={require('././images/splash.jpeg')}
        // source={Splash}
        source={require('../../assets/images/splash.gif')}
        style={styles.backgroundImage}/> */}
      <ImageBackground
        //src/assets/images/splash.jpeg
        // source={require('././images/splash.jpeg')}
        // source={Splash}
        source={require('../../assets/images/splash.gif')}
        style={styles.backgroundImage}
      />
      {/* <GifImage
        source={
          //   {uri: 'https://media.tenor.com/images/1c39f2d94b02d8c9366de265d0fba8a0/tenor.gif',}
          require('../../assets/images/splash.gif')
        }
        style={{
          width: '100%',
          height: '100%',
        }}
        // paused={true}
        // resizeMode={'cover'}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // width: 100,
    // height: 100,
    // resizeMode: 'cover',
    // resizeMode: 'stretch',
  },
});
