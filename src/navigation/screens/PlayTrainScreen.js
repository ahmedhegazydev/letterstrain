import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NUMBERS_OR_LETTERS_CHOOSE_NAME} from '../../constants/constants';
import SoundPlayer from 'react-native-sound-player';
import LoopAnimation from 'react-native-LoopAnimation';
import ShowChoosenChImage from '../../utils/Utils.js';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import SoundRecorder from 'react-native-sound-recorder';
import RNPermissions, {
  NotificationsResponse,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  check,
  request,
  RESULTS,
} from 'react-native-permissions';
// import {Audio} from 'expo-av';

export default function PlayTrainScreen({}) {
  const [changeCloudStars, toggleCloudStars] = useState(true);
  const [soundBgPlaying, playBgSound] = useState(true);

  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [recordTime, setRecordTime] = useState(0);
  const [recordSecs, setRecordSecs] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  const {width} = Dimensions.get('window');
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const onStartRecord = async () => {
    // alert('onStartRecord');
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      // this.setState({
      //   recordSecs: e.currentPosition,
      //   recordTime: this.audioRecorderPlayer.mmssss(
      //     Math.floor(e.currentPosition),
      //   ),
      // });
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    // this.setState({
    //   recordSecs: 0,
    // });
    setRecordSecs(0);
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      // this.setState({
      //   currentPositionSec: e.currentPosition,
      //   currentDurationSec: e.duration,
      //   playTime: this.audioRecorderPlayer.mmssss(
      //     Math.floor(e.currentPosition),
      //   ),
      //   duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      // });
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));

      return;
    });
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const startRecording = () => {
    alert('startRecording');
    SoundRecorder.start(
      // SoundRecorder.PATH_CACHE
      SoundRecorder.PATH_DOCUMENT + '/test.mp3',
    ).then(function () {
      console.log('started recording');
    });
  };

  const stopRecording = () => {
    // alert('stopRecording');

    // check(PERMISSIONS.ANDROID.RECORD_AUDIO)
    //   .then(result => {
    //     switch (result) {
    //       case RESULTS.UNAVAILABLE:
    //         console.log(
    //           'This feature is not available (on this device / in this context)',
    //         );
    //         break;
    //       case RESULTS.DENIED:
    //         console.log(
    //           'The permission has not been requested / is denied but requestable',
    //         );
    //         request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {});

    //         break;
    //       case RESULTS.LIMITED:
    //         console.log('The permission is limited: some actions are possible');
    //         break;
    //       case RESULTS.GRANTED:
    //         console.log('The permission is granted');
    //         // alert('The permission is granted');
    //         // SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4').then(
    //         //   function () {
    //         //     console.log('started recording');
    //         //   },
    //         // );
    //         break;
    //       case RESULTS.BLOCKED:
    //         console.log('The permission is denied and not requestable anymore');
    //         break;
    //     }
    //   })
    //   .catch(error => {
    //     // …
    //   });

    SoundRecorder.stop().then(function (result) {
      console.log('stopped recording, audio file saved at: ' + result.path);
    });
  };

  const playRecording = () => {
    //alert('playRecording');
    try {
      SoundPlayer.playSoundFile('test', 'mp3');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };

  // const _onPressCharacter1 = () => {
  //   setChooseCh1(!chooseCh1);
  //   navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {
  //     choosen_ch: 1,
  //   });
  // };

  const value = new Animated.Value(0);
  const value2 = new Animated.Value(0);

  const translateX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 2, -(width * 2)],
    // outputRange: [1, 0],
    // outputRange: ['0deg', '360deg'],
  });
  const translateX2 = value2.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 4, -(width * 4)],
    // outputRange: [1, 0],
    // outputRange: ['0deg', '360deg'],
  });

  const opacity = value;

  React.useEffect(() => {
    check(PERMISSIONS.ANDROID.RECORD_AUDIO)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {});

            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  }, []);

  // React.useEffect(() => {
  //   Animated.loop(
  //     Animated.parallel([
  //       // Animated.sequence([
  //       Animated.timing(value, {
  //         toValue: 1,
  //         duration: 7000,
  //         useNativeDriver: true,
  //       }),

  //       Animated.timing(value2, {
  //         toValue: 1,
  //         duration: 10000,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ).start();
  // }, []);

  const goToHome = () => {
    navigation.navigate(NUMBERS_OR_LETTERS_CHOOSE_NAME, {});
  };

  const playBackgroundSound = () => {
    try {
      // play the file tone.mp3
      SoundPlayer.playSoundFile('sound_bg', 'mp3');
      // or play from url
      // SoundPlayer.playUrl('https://example.com/music.mp3');
      playBgSound(!soundBgPlaying);
      if (soundBgPlaying == false) {
        SoundPlayer.stop();
      }
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  const toggleBg = () => {
    // aler('toggleBg');
    toggleCloudStars(!changeCloudStars);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={
          {
            // flex: 1
          }
        }>
        <Image
          source={
            changeCloudStars
              ? require('../../assets/images/day_clouds.png')
              : require('../../assets/images/night_stars.png')
          }
          style={{
            // resizeMode: 'stretch',
            // resizeMode: 'contain',
            // resizeMode: 'cover',
            // flex: 1,
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View
        style={{
          // flex: 1,
          position: 'absolute',
          // backgroundColor: 'red',
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
        }}>
        {/* <Image
          source={require('../../assets/images/green_bottom_bg.png')}
          style={{
            // resizeMode: 'stretch',
            // resizeMode: 'contain',
            // resizeMode: 'cover',
            // flex: 1,
            width: '100%',
            height: 80,
          }}
        /> */}

        {/* <Animated.View
            style={[
              {
                // flex: 1,
                width: width * 4,
                // position: 'absolute',
              },
              {transform: [{translateX: translateX2}]},
            ]}>
            <Image
              source={require('../../assets/images/green_bottom_bg.png')}
              style={{
                // resizeMode: 'stretch',
                // resizeMode: 'contain',
                // resizeMode: 'cover',
                // flex: 1,
                width: '100%',
                height: 80,
              }}
            />
          </Animated.View> */}

        <View
          style={{
            height: 100,
            // flex: 1,
            // position: 'absolute',
            // height: '40%',
            // marginBottom: -100,
            width: '100%',
          }}>
          <LoopAnimation
            style={{
              width: '100%',
              // marginBottom: -100,
            }}
            source={require('../../assets/images/tree_circles.png')}
            duration={20000}
          />
        </View>
        <View
          style={{
            // height: 500,
            // flex: 1,
            height: '90%',
            width: '100%',
            position: 'absolute',
            // backgroundColor: 'yellow',
          }}>
          <View
            style={{
              height: 300,
            }}>
            <LoopAnimation
              style={{
                width: '100%',
                // height: '100%',
              }}
              source={require('../../assets/images/all-trees.png')}
              duration={12000}
            />
          </View>
        </View>

        <View
          style={[
            {
              height: 100,
              // position: 'absolute',
            },
          ]}>
          <LoopAnimation
            style={{
              width: '100%',
            }}
            source={require('../../assets/images/green_bottom_bg.png')}
            duration={18000}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellow',
            width: '100%',
            height: '100%',
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <View
            style={{
              // backgroundColor: 'red',
              flex: 3,
              padding: 20,
            }}>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red'
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  // backgroundColor: 'red',
                  // justifyContent: 'flex-end',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    // width: '100%',
                    // height: '100%',
                    flex: 1,
                    // backgroundColor: 'red',
                    // justifyContent: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={toggleBg}>
                    <Image
                      source={require('../../assets/images/night_button.png')}
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        height: 40,
                        margin: 10,
                        width: 40,
                        // height: 80,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={playBackgroundSound}>
                    <Image
                      source={
                        soundBgPlaying
                          ? require('../../assets/images/sound-button.png')
                          : require('../../assets/images/night_button.png')
                      }
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        height: 40,
                        margin: 10,
                        width: 40,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    // width: '100%',
                    // height: '100%',
                    flex: 1,
                    // backgroundColor: 'white',
                    // justifyContent: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                  }}>
                  <TouchableOpacity onPress={goToHome}>
                    <Image
                      source={require('../../assets/images/home_button.png')}
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        height: 40,
                        margin: 10,
                        width: 40,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 4,
                // backgroundColor: 'green'
              }}>
              <Image
                source={require('../../assets/images/train_body.png')}
                style={{
                  // resizeMode: 'stretch',
                  resizeMode: 'contain',
                  // resizeMode: 'cover',
                  // flex: 1,
                  height: '100%',
                  marginLeft: 50,
                  marginTop: 40,
                  width: '100%',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'pink',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  // backgroundColor: 'red',
                  // justifyContent: 'flex-end',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <View
                  style={{
                    flex: 1,
                    // width: '100%',
                    // height: '100%',
                    // backgroundColor: '#eedd33',
                    // justifyContent: 'center',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginRight: -60,
                    marginTop: 30,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // position: 'absolute',
                      backgroundColor: '#fe8d1a',
                      width: 160,
                      height: 40,
                      // marginTop: 70,
                    }}
                  />
                  <View
                    style={{
                      // width: '100%',
                      // height: '100%',
                      flex: 1,
                      marginTop: -50,
                      // backgroundColor: 'red',
                      // justifyContent: 'flex-end',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      // marginBottom: 200,

                      flexDirection: 'row-reverse',
                    }}>
                    <TouchableOpacity onPress={startRecording}>
                      <Image
                        source={require('../../assets/images/record-button.png')}
                        style={{
                          // resizeMode: 'stretch',
                          resizeMode: 'contain',
                          // resizeMode: 'cover',
                          // flex: 1,
                          height: 40,
                          margin: 10,
                          width: 40,
                          // height: 80,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={stopRecording}>
                      <Image
                        source={require('../../assets/images/stop_button.png')}
                        style={{
                          // resizeMode: 'stretch',
                          resizeMode: 'contain',
                          // resizeMode: 'cover',
                          // flex: 1,
                          height: 40,
                          margin: 10,
                          width: 40,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={playRecording}>
                      <Image
                        source={require('../../assets/images/play_button.png')}
                        style={{
                          // resizeMode: 'stretch',
                          resizeMode: 'contain',
                          // resizeMode: 'cover',
                          // flex: 1,
                          height: 40,
                          margin: 10,
                          width: 40,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    // width: '100%',
                    // height: '100%',
                    flex: 1,
                    // width: 100,
                    // height: 100,
                    // backgroundColor: 'white',
                    // justifyContent: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    // padding: 20,
                    // flexDirection: 'row-reverse',
                    flexDirection: 'row',
                  }}>
                  <ShowChoosenChImage
                    choosen_ch={2}
                    style={{
                      // flex: 1,
                      width: 100,
                      // padding: 30,
                      height: 200,
                      // marginTop: 30,

                      marginBottom: -50,
                      resizeMode: 'contain',
                      // resizeMode: 'cover',

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'green',
              flex: 1,
              // justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                // justifyContent: 'center',
                justifyContent: 'flex-end',
                alignItems: 'center',
                // padding: 60,
                marginBottom: 40,
              }}>
              <Image
                source={require('../../assets/images/train_drive.png')}
                style={{
                  // resizeMode: 'stretch',
                  resizeMode: 'contain',
                  // resizeMode: 'cover',
                  // flex: 1,
                  height: 140,
                  width: '100%',
                  // height: 80,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
