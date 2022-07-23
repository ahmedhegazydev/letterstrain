import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useRef, useContext} from 'react';
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
  BackHandler,
  Alert,
  AppState,
} from 'react-native';
import {
  NUMBERS_OR_LETTERS_CHOOSE_NAME,
  SelectedBG,
  SelectedShape,
} from '../../constants/constants';
import SoundPlayer from 'react-native-sound-player';
import LoopAnimation from 'react-native-LoopAnimation';
import {
  ShowChoosenChImage,
  ShowChoosenTrainCarImage,
} from '../../utils/Utils.js';
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
import {FlatGrid} from 'react-native-super-grid';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
import {Canvas} from '@benjeau/react-native-draw';

export default function ComeToWriting({}) {
  const [changeCloudStars, toggleCloudStars] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {}, []);

  return <View></View>;
}

const styles = StyleSheet.create({
  main_container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
