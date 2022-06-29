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
import showChoosenChImage from '../../utils/Utils.js';
export default function ChoosBgAndShape({}) {
  // const [chooseCh1, setChooseCh1] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const _onPressNumbers = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
  };

  const _onPressLetters = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
  };

  useEffect(() => {
    // alert(route.params.choosen_ch);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFEC00',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        flexDirection: 'row-reverse',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Beehive2.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <View
        styles={{
          // flex: 1,
          width: '70%',
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#FFFFFF',
          height: '100%',
          // flexDirection: 'row',
          // position: 'absolute',
        }}>
        <Text>dsdsdsd</Text>
        <Text>dsdsdsd</Text>
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
    // backgroundColor: '#FFEC00',
    backgroundColor: '#00000000',

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
    flexDirection: 'row-reverse',

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
    // flexDirection: 'row',
    flexDirection: 'row-reverse',

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
    // flexDirection: 'row',
    flexDirection: 'row-reverse',
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
    // flexDirection: 'row',
    // flexDirection: 'row-reverse',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#FFEC00',
    // height: 250,
    flex: 1, // pushes the footer to the end of the screen
  },
  backgroundImage: {
    // resizeMode: 'cover',
    // resizeMode: 'stretch',
    // resizeMode: 'contain',
    width: '100%',
    height: '100%',
    // marginTop: -200,
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
