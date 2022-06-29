import {useNavigation, useRoute} from '@react-navigation/native';
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
import {BG_SHAPE_CHOOSE_NAME} from '../../constants/constants';
import showChoosenChImage from '../../utils/Utils.js';

export default function ChooseNumbersOrLetters({}) {
  // const [chooseCh1, setChooseCh1] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const _onPressNumbers = () => {
    navigation.navigate(BG_SHAPE_CHOOSE_NAME, {
      choosen_ch: route.params.choosen_ch,
    });
  };

  const _onPressLetters = () => {
    navigation.navigate(BG_SHAPE_CHOOSE_NAME, {
      choosen_ch: route.params.choosen_ch,
    });
  };

  useEffect(() => {
    // alert(route.params.choosen_ch);
  });

  // const showChoosenChImage = () => {
  //   if (route.params.choosen_ch) {
  //     if (route.params.choosen_ch == 1) {
  //       return (
  //         <Image
  //           style={styles.image_view_chosen_character}
  //           source={require('../../assets/images/ch1.png')}
  //         />
  //       );
  //     } else {
  //       if (route.params.choosen_ch == 2) {
  //         return (
  //           <Image
  //             style={styles.image_view_chosen_character}
  //             source={require('../../assets/images/ch2.png')}
  //           />
  //         );
  //       } else {
  //         if (route.params.choosen_ch == 3) {
  //           return (
  //             <Image
  //               style={styles.image_view_chosen_character}
  //               source={require('../../assets/images/ch3.png')}
  //             />
  //           );
  //         } else {
  //           return (
  //             <Image
  //               style={styles.image_view_chosen_character}
  //               source={require('../../assets/images/ch4.png')}
  //             />
  //           );
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={styles.backgroundImage}
        />
      </View>

      {/* <View style={styles.footer}>
        <Image
          source={require('../../assets/images/Beehive2.png')}
          style={styles.backgroundImageFooter}
        />
      </View> */}

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
            <TouchableWithoutFeedback>
              <View style={styles.ch_image1}>
                <Image
                  style={styles.image_view}
                  source={require('../../assets/images/button-numbers.png')}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.ch_image2}>
                <Image
                  style={styles.image_view}
                  source={require('../../assets/images/button-letters.png')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.flex3}></View>
      </View>

      <View style={styles.characters_choosen_}>
        <View style={styles.flex1_choosen_ch}>
          {/* <Text>daaasasa </Text> */}
          <TouchableWithoutFeedback onPress={_onPressLetters}>
            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                // backgroundColor: '#ffdd22',
              }}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={_onPressNumbers}>
            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                // backgroundColor: '#ffd222',
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.flex2_chosen_ch}>
          {/* <Text>daaasasa </Text> */}
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              justifyContent: 'center',
              alignItems: 'center',

              //   flex: 1,
            }}>
            <TouchableWithoutFeedback>
              <View style={styles.image_chosen_character}>
                {/* <Image
                  style={styles.image_view_chosen_character}
                  source={require('../../assets/images/ch0.png')}
                /> */}
                {showChoosenChImage()}
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
    width: 340,
  },
  image_view_chosen_character: {
    flex: 1,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_chosen_character: {
    // width: 80,
    height: 295,
    marginBottom: 50,
    marginRight: 0,
    // flex: 1,
    // aspectRatio: .4,
    marginLeft: 0,
    // resizeMode: 'cover',
    // resizeMode: 'stretch',
    // resizeMode: 'contain'
    justifyContent: 'center',
    alignItems: 'center',
  },
  ch_image1: {
    width: 80,
    height: 250,
    marginBottom: 130,
    marginRight: 250,
    marginLeft: 150,
  },
  ch_image2: {
    width: 80,
    height: 250,
    marginBottom: 130,
    marginRight: 320,
    marginLeft: 90,
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
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#FFEC00',

    // height: '50%',
    width: '100%',
    flex: 2,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex3: {
    // backgroundColor: '#FFFFFF',
    // backgroundColor: '#FFEC00',
    // #fe8d1a
    backgroundColor: '#fe8d1a',

    // height: 5,
    width: '100%',
    flex: 0.2,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1_choosen_ch: {
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#00000000',
    // backgroundColor: '#FDDFFF',
    flexDirection: 'row',
    // height: '50%',
    width: '100%',
    // height: '100%',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2_chosen_ch: {
    backgroundColor: '#FFFFFF',
    // height: '50%',
    width: '100%',
    flex: 1,
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
  characters_choosen_: {
    // flex: 1,
    // height: 200,
    height: '100%',
    width: '100%',
    // backgroundColor: '#FFDDCC',
    backgroundColor: '#00000000', //transparent
    // backgroundColor: '#FFEC00', //yellow
    // backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
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
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#FFEC00',
    // height: 250,
    flex: 1, // pushes the footer to the end of the screen
  },
  backgroundImage: {
    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // height: 200,
    marginTop: -200,
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
