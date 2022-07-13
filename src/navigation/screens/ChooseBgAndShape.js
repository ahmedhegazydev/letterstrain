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
  AppState,
} from 'react-native';
import {
  NumsOrLetters,
  SelectedBG,
  SelectedShape,
  START_GAME_CHOOSE_NAME,
} from '../../constants/constants.js';
import ShowChoosenChImage from '../../utils/Utils.js';

var shapeSelected = false;
var bgSelected = false;

export default function ChoosBgAndShape({}) {
  const [selectedShape, setSelectedShape] = useState('');
  const [selectedBg, setSelectedBg] = useState('');

  const [animalsSelected, setAnimalSelected] = useState(false);
  const [plantsSelected, setPlantsSelected] = useState(false);
  const [citySelected, setCitySelected] = useState(false);
  const [jungleSelected, setJungleSelected] = useState(false);

  const [showNextButton, setNextButtonVisibility] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const {numOrLetter} = route.params;

  const _onPressAnimalLetters = () => {
    // navigation.navigate(START_GAME_CHOOSE_NAME, {
    //   selectedShape: SelectedShape.Animals,
    //   selectedBg: 0,
    // });
    // alert('_onPressAnimalLetters');
    setAnimalSelected(true);
    setPlantsSelected(false);

    if (numOrLetter != NumsOrLetters.Numbers) {
      setSelectedShape(SelectedShape.Fishes);
    } else {
      setSelectedShape(SelectedShape.Animals);
    }
    shapeSelected = true;
    checkNextVisibility();
  };

  const checkNextVisibility = () => {
    if (shapeSelected && bgSelected) {
      setNextButtonVisibility(true);
    }
  };

  const _onPressPlantsLetters = () => {
    // navigation.navigate(START_GAME_CHOOSE_NAME, {
    //   selectedShape: 0,
    //   selectedBg: 0,
    // });
    // alert('_onPressPlantsLetters');
    setAnimalSelected(false);
    setPlantsSelected(true);
    if (numOrLetter != NumsOrLetters.Numbers) {
      setSelectedShape(SelectedShape.Breads);
    } else {
      setSelectedShape(SelectedShape.Plants);
    }

    shapeSelected = true;
    checkNextVisibility();
  };

  const _onPressBlanckLettersAbove = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
    // alert('_onPressBlanckLettersAbove');

    console.log(selectedShape);
    console.log(selectedBg);

    // if (selectedShape.length != 0 && selectedBg.length != 0) {
    //   navigation.navigate(START_GAME_CHOOSE_NAME, {
    //     shape: selectedShape,
    //     bg: selectedBg,
    //   });
    // }
  };

  const _onPressNextButton = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
    // alert('_onPressBlanckLettersAbove');

    console.log(selectedShape);
    console.log(selectedBg);

    if (selectedShape.length != 0 && selectedBg.length != 0) {
      navigation.navigate(START_GAME_CHOOSE_NAME, {
        shape: selectedShape,
        bg: selectedBg,
      });
    }
  };

  const _onPressCityButton = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
    // alert('_onPressCityButton');
    setCitySelected(true);
    setJungleSelected(false);

    setSelectedBg(SelectedBG.Buildings);

    bgSelected = true;
    checkNextVisibility();
  };

  const _onPressCountryButton = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
    // alert('_onPressCountryButton');
    setCitySelected(false);
    setJungleSelected(true);
    setSelectedBg(SelectedBG.Jungle);

    bgSelected = true;
    checkNextVisibility();
  };

  const _onPressBlanckLettersDown = () => {
    // navigation.navigate(CHARACTER_CHOOSE_NAME);
    // alert('_onPressBlanckLettersDown');
  };

  // var passedBg = SelectedBG.Buildings;
  // var passedShape = SelectedShape.Animals;

  useEffect(() => {
    // alert(route.params.choosen_ch);
    // if (selectedShape === SelectedShape.Animals) {
    // } else {
    // }
    // if (selectedBg === SelectedBG.Buildings) {
    //   passedBg = ""
    // } else {
    // }
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={styles.backgroundImage}
        />
      </View> */}

      <View
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          // flexDirection: 'row',
          flexDirection: 'row-reverse',
          // backgroundColor: 'green',
          // backgroundColor: '#00000000', //transparent
          // backgroundColor: '#FFEC00', //yellow
          // backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
        }}>
        {/* <View style={styles.flex1_choosen_ch}>
          <Text>dsdsdss</Text>
        </View> */}
        <View
          style={{
            // backgroundColor: '#FFFFFF',
            // height: '50%',
            // width: '100%',
            flex: 1,
            // height: '100%',
          }}>
          <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                // flex: 1,
                width: '100%',
                height: '100%',
                opacity: 0.2,
              }}
              source={require('../../assets/images/Beehive2.png')}
            />

            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                // backgroundColor: 'green',
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'yellow'
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <TouchableWithoutFeedback onPress={_onPressAnimalLetters}>
                  <View
                    style={[
                      {width: 170, height: 170, padding: 0},
                      animalsSelected ? styles.border_style : {},
                    ]}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={
                        numOrLetter === NumsOrLetters.Numbers
                          ? require('../../assets/images/animal-letters.png')
                          : require('../../assets/images/button-fish.png')
                      }
                    />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={_onPressPlantsLetters}>
                  <View
                    style={[
                      {width: 155, height: 155, padding: 10},
                      plantsSelected ? styles.border_style : {},
                    ]}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={
                        numOrLetter === NumsOrLetters.Numbers
                          ? require('../../assets/images/plants-letters.png')
                          : require('../../assets/images/button-breds.png')
                      }
                    />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={_onPressBlanckLettersAbove}>
                  <View
                    style={[
                      {width: 165, height: 165, padding: 10},
                      // animalsSelected ? styles.border_style : {},
                    ]}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../assets/images/blank-letters.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red'
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: 'yellow'
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                  }}>
                  <TouchableWithoutFeedback onPress={_onPressCityButton}>
                    <View
                      style={[
                        {width: 175, height: 175, padding: 10},
                        citySelected ? styles.border_style : {},
                      ]}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/city-button.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={_onPressCountryButton}>
                    <View
                      style={[
                        {width: 175, height: 175, padding: 10},
                        jungleSelected ? styles.border_style : {},
                      ]}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/country-button.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={_onPressBlanckLettersDown}>
                    <View
                      style={[
                        {width: 165, height: 165, padding: 10},
                        // styles.border_style,
                        // animalsSelected ? styles.border_style : {},
                      ]}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/blank-letters.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: '4%',
            // flex: 1,
            // backgroundColor: '#ffffff',
            backgroundColor: '#fe8d1a',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '100%',
              // width: '15%',
              // flex: 1,
              // backgroundColor: '#fe8d1a',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                // width: '15%',
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                height: '100%',
                // width: '15%',
                flex: 1,
                backgroundColor: '#fe8d1a',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                // alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'green',
              }}>
              <TouchableOpacity onPress={_onPressNextButton}>
                {showNextButton && (
                  <Image
                    style={{
                      // width: '15%',
                      // height: '15%',
                      width: 50,
                      height: 50,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/images/next-button.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            height: '100%',
            width: '13%',
            // flex: 1,
            // backgroundColor: 'green',
            backgroundColor: '#ffffff',
          }}
        />
      </View>

      <View style={styles.characters_choosen_}>
        <View style={styles.flex1_choosen_ch}>
          <View style={styles.ch_image}>
            {/* <Image
                style={styles.image_view}
                source={require('../../assets/images/ch3.png')}
              /> */}
            {/* <ShowChoosenChImage
                choosen_ch={route.params.choosen_ch}
                style={styles.image_view}
              /> */}
          </View>
        </View>
        <View style={styles.flex2_chosen_ch}>
          <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border_style: {
    // borderColor: 'red',
    // borderWidth: 4,
    // borderBottomWidth: 1,
    // borderTopWidth: 1,

    padding: 30,
  },
  ch_image: {
    width: '100%',
    height: '100%',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 90,
    // marginRight: 90,
    // marginLeft: 0,
  },
  image_view: {
    // flex: 1,
    width: 150,
    height: 200,
    marginBottom: -250,
    marginLeft: -10,
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
  characters_choosen_: {
    // flex: 1,
    // height: 200,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    // flexDirection: 'row-reverse',
    // backgroundColor: 'green',
    // backgroundColor: '#00000000', //transparent
    // backgroundColor: '#FFEC00', //yellow
    // backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  flex1_choosen_ch: {
    // backgroundColor: '#FFFFFF',
    // backgroundColor: '#00000000',
    // backgroundColor: 'red',
    // flexDirection: 'row',
    // height: '50%',
    width: '100%',
    // width: 300,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2_chosen_ch: {
    // backgroundColor: '#FFFFFF',
    // height: '50%',
    width: '100%',
    flex: 3,
    height: '100%',
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
