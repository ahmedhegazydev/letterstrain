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
// import {CHARACTER_CHOOSE_NAME} from '../../constants/constants';
export default ShowChoosenChImage = props => {
  // var choosen_ch = route.params.choosen_ch;
  // var choosen_ch = 1;
  const {style, choosen_ch: choosen_ch = 1} = props;
  // const {style, choosen_ch} = props;

  if (choosen_ch) {
    if (choosen_ch == 1) {
      return (
        <Image
          style={[styles.image_view_chosen_character, style]}
          source={require('../assets/images/ch1.png')}
        />
      );
    } else {
      if (choosen_ch == 2) {
        return (
          <Image
            style={[styles.image_view_chosen_character, style]}
            source={require('../assets/images/ch2.png')}
          />
        );
      } else {
        if (choosen_ch == 3) {
          return (
            <Image
              style={[styles.image_view_chosen_character, style]}
              source={require('../assets/images/ch3.png')}
            />
          );
        } else {
          return (
            <Image
              style={[styles.image_view_chosen_character, style]}
              source={require('../assets/images/ch4.png')}
            />
          );
        }
      }
    }
  }
};

const styles = StyleSheet.create({
  // image_view_chosen_character: {
  //   flex: 1,
  //   width: 200,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
