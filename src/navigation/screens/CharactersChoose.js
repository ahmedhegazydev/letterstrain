import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NUMBERS_OR_LETTERS_CHOOSE_NAME} from '../../constants/constants';

export default function CharactersChoose({}) {
  const [chooseCh1, setChooseCh1] = useState(false);
  const [chooseCh2, setChooseCh2] = useState(false);
  const [chooseCh3, setChooseCh3] = useState(false);
  const [chooseCh4, setChooseCh4] = useState(false);
  const navigation = useNavigation();

  const _onPressCharacter1 = () => {
    setChooseCh1(!chooseCh1);
    navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {
      choosen_ch: 1,
    });
  };
  const _onPressCharacter2 = () => {
    setChooseCh2(!chooseCh2);
    navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {
      choosen_ch: 2,
    });
  };
  const _onPressCharacter3 = () => {
    setChooseCh3(!chooseCh3);
    navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {
      choosen_ch: 3,
    });
  };
  const _onPressCharacter4 = () => {
    setChooseCh4(!chooseCh4);
    navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {
      choosen_ch: 4,
    });
  };

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
            <TouchableWithoutFeedback onPress={_onPressCharacter1}>
              <View style={styles.ch_image}>
                <Image
                  style={styles.image_view}
                  source={
                    chooseCh1
                      ? require('../../assets/images/ch1-choose.png')
                      : require('../../assets/images/ch1.png')
                  }
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={_onPressCharacter2}>
              <View style={styles.ch_image}>
                <Image
                  style={styles.image_view}
                  source={
                    chooseCh2
                      ? require('../../assets/images/ch2-choose.png')
                      : require('../../assets/images/ch2.png')
                  }
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={_onPressCharacter3}>
              <View style={styles.ch_image}>
                <Image
                  style={styles.image_view}
                  source={
                    chooseCh3
                      ? require('../../assets/images/ch3-choose.png')
                      : require('../../assets/images/ch3.png')
                  }
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={_onPressCharacter4}>
              <View style={styles.ch_image}>
                <Image
                  style={styles.image_view}
                  source={
                    chooseCh4
                      ? require('../../assets/images/ch4-choose.png')
                      : require('../../assets/images/ch4.png')
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image_view: {
    flex: 1,
    width: 150,
    resizeMode: 'contain',
  },
  ch_image: {
    width: 80,
    height: 260,
    marginBottom: 100,
    marginRight: 90,
    marginLeft: 0,
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
    resizeMode: 'cover',
    // resizeMode: 'stretch',
    // resizeMode: 'contain',
    // resizeMode: 'repeat',
    height: '100%',
    width: '100%',
    // paddingTop: -550,
  },
  footer: {
    backgroundColor: '#FFEC00',
    // backgroundColor: 'red',
    // height: 250,
    width: '100%',
    flex: 1, // pushes the footer to the end of the screen
  },
  contentContainer: {
    backgroundColor: '#FFEC00',
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
