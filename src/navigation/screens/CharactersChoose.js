import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function CharactersChoose({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.footer}>
        <Image
          source={require('../../assets/images/Beehive2.png')}
          style={styles.backgroundImageFooter}
        />
      </View>

      <View style={styles.characters}>
        <View style={styles.flex1}>{/* <Text>daaasasa </Text> */}</View>
        <View style={styles.flex2}>
          {/* <Text>daaasasa </Text> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',

              //   flex: 1,
            }}>
            <View style={styles.ch_image}>
              <Image
                style={{
                  flex: 1,
                  width: 100,
                }}
                source={require('../../assets/images/splash.jpeg')}
              />
            </View>
            <View style={styles.ch_image}>
              <Image
                style={{
                  flex: 1,
                  width: 100,
                }}
                source={require('../../assets/images/splash.jpeg')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ch_image: {
    width: 50,
    height: 200,
    marginBottom: 90,
    marginRight: 40,
    marginLeft: 40,
  },

  flex1: {
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#00000000',

    // height: '50%',
    width: '100%',
    // height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2: {
    backgroundColor: '#FFFFFF',
    // height: '50%',
    width: '100%',
    flex: 2,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#FFFFFF',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    // flex: 1,
    // height: 200,
    height: '70%',
    width: '100%',
    // backgroundColor: '#FFDDCC',
    backgroundColor: '#00000000', //transparent
    // backgroundColor: '#FFEC00', //yellow

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFEC00',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImageFooter: {
    // flex: 1,
    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // resizeMode: 'repeat',
    // height: 500,
    // width: 700,
    // paddingTop: -550,
  },
  contentContainer: {
    backgroundColor: '#FFEC00',
    flex: 1, // pushes the footer to the end of the screen
  },
  footer: {
    backgroundColor: '#FFEC00',
    // backgroundColor: '#FFFFFF',
    // height: 250,
    flex: 1, // pushes the footer to the end of the screen
  },
  backgroundImage: {
    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // height: 200,
    marginTop: -180,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
