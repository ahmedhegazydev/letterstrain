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

export default function PlayTrainScreen({}) {
  const [changeCloudStars, toggleCloudStars] = useState(true);
  const [soundBgPlaying, playBgSound] = useState(true);

  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [recordTime, setRecordTime] = useState(0);
  const [recordSecs, setRecordSecs] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // const [leftPosition, setLeftPosition] = useState(new Animated.Value(0));

  const navigation = useNavigation();
  const route = useRoute();
  const {width} = Dimensions.get('window');
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const {shape, bg} = route.params;

  const extension = '.png';
  var animalName = 'animal1';
  // var currentAnimalName = animalName + extension;

  const breads = [
    {
      image: require('../../assets/images/number-bread-1.png'),
      // name: 'أرنب',
      character: '1',
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
    },
    {
      image: require('../../assets/images/number-bread-2.png'),
      // name: 'أرنب',
      character: '2',
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
    },
    {
      image: require('../../assets/images/number-bread-3.png'),
      // name: 'أرنب',
      character: '3',
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
    },
    {
      image: require('../../assets/images/number-bread-4.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '4',
    },
    {
      image: require('../../assets/images/number-bread-5.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '5',
    },
    {
      image: require('../../assets/images/number-bread-6.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '6',
    },
    {
      image: require('../../assets/images/number-bread-7.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '7',
    },
    {
      image: require('../../assets/images/number-bread-8.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '8',
    },
    {
      image: require('../../assets/images/number-bread-9.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '9',
    },
    {
      image: require('../../assets/images/number-bread-10.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '10',
    },
    {
      image: require('../../assets/images/number-bread-11.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '11',
    },
    {
      image: require('../../assets/images/number-bread-12.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '12',
    },
    {
      image: require('../../assets/images/number-bread-13.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '13',
    },
    {
      image: require('../../assets/images/number-bread-14.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '14',
    },
    {
      image: require('../../assets/images/number-bread-15.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '15',
    },
    {
      image: require('../../assets/images/number-bread-16.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '16',
    },
    {
      image: require('../../assets/images/number-bread-17.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '17',
    },
    {
      image: require('../../assets/images/number-bread-18.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '18',
    },
    {
      image: require('../../assets/images/number-bread-19.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '19',
    },
    {
      image: require('../../assets/images/number-bread-20.png'),
      car: require('../../assets/images/car-backed-main.png'),
      numberLetterContainer: require('../../assets/images/car-backed-number.png'),
      // name: 'أرنب',
      character: '20',
    },
  ];

  const fishes = [
    {
      image: require('../../assets/images/number-fish-1.png'),
      // name: 'أرنب',
      character: '1',
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
    },
    {
      image: require('../../assets/images/number-fish-2.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '2',
    },
    {
      image: require('../../assets/images/number-fish-3.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '3',
    },
    {
      image: require('../../assets/images/number-fish-4.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '4',
    },
    {
      image: require('../../assets/images/number-fish-5.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '5',
    },
    {
      image: require('../../assets/images/number-fish-6.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '6',
    },
    {
      image: require('../../assets/images/number-fish-7.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '7',
    },
    {
      image: require('../../assets/images/number-fish-8.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '8',
    },
    {
      image: require('../../assets/images/number-fish-9.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '9',
    },
    {
      image: require('../../assets/images/number-fish-10.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '10',
    },
    {
      image: require('../../assets/images/number-fish-11.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '11',
    },
    {
      image: require('../../assets/images/number-fish-12.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '12',
    },
    {
      image: require('../../assets/images/number-fish-13.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '13',
    },
    {
      image: require('../../assets/images/number-fish-14.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '14',
    },
    {
      image: require('../../assets/images/number-fish-15.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '15',
    },
    {
      image: require('../../assets/images/number-fish-16.png'),
      // name: 'أرنب',  car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      character: '16',
      car: require('../../assets/images/car-fish-main.png'),
    },
    {
      image: require('../../assets/images/number-fish-17.png'),
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      // name: 'أرنب',
      character: '17',
    },
    {
      image: require('../../assets/images/number-fish-18.png'),
      // name: 'أرنب',
      character: '18',
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
    },
    {
      image: require('../../assets/images/number-fish-19.png'),
      // name: 'أرنب',  car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
      character: '19',
      car: require('../../assets/images/car-fish-main.png'),
    },
    {
      image: require('../../assets/images/number-fish-20.png'),
      // name: 'أرنب',
      character: '20',
      car: require('../../assets/images/car-fish-main.png'),
      numberLetterContainer: require('../../assets/images/car-fish-number.png'),
    },
  ];
  const animals = [
    {
      image: require('../../assets/images/animal1.png'),
      name: 'أرنب',
      character: 'أ',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal2.png'),
      name: 'بقرة',
      character: 'ب',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal3.png'),
      name: 'تمساح',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ت',
    },
    {
      image: require('../../assets/images/animal4.png'),
      name: 'ثعبان',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ث',
    },
    {
      image: require('../../assets/images/animal5.png'),
      name: 'جمل',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ج',
    },
    {
      image: require('../../assets/images/animal6.png'),
      name: 'حلزون',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ح',
    },
    {
      image: require('../../assets/images/animal7.png'),
      name: 'خروف',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'خ',
    },
    {
      image: require('../../assets/images/animal8.png'),
      name: 'دلافين',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'د',
    },
    {
      image: require('../../assets/images/animal9.png'),
      name: 'ذئب',
      character: 'ذ',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal10.png'),
      name: 'راكون',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ر',
    },
    {
      image: require('../../assets/images/animal11.png'),
      name: 'زرافة',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ز',
    },
    {
      image: require('../../assets/images/animal12.png'),
      name: 'سلطعون',
      character: 'س',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal13.png'),
      name: 'شيتا',
      character: 'ش',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal14.png'),
      name: 'صوص',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ص',
    },
    {
      image: require('../../assets/images/animal15.png'),
      name: 'ضفدع',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ض',
    },
    {
      image: require('../../assets/images/animal16.png'),
      name: 'طاووس',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ط',
    },
    {
      image: require('../../assets/images/animal17.png'),
      name: 'ظبي',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ظ',
    },
    {
      image: require('../../assets/images/animal18.png'),
      name: 'عنكبوت',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ع',
    },
    {
      image: require('../../assets/images/animal19.png'),
      name: 'غوريلا',
      character: 'غ',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal20.png'),
      name: 'فيل',
      character: 'ف',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal21.png'),
      name: 'قرد',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ق',
    },
    {
      image: require('../../assets/images/animal22.png'),
      name: 'كلب',
      character: 'ك',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal23.png'),
      name: 'لاما',
      character: 'ل',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal24.png'),
      name: 'ماعز',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'م',
    },
    {
      image: require('../../assets/images/animal25.png'),
      name: 'نعامة',
      character: 'ن',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
    {
      image: require('../../assets/images/animal26.png'),
      name: 'هدهد',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'ه',
    },
    {
      image: require('../../assets/images/animal27.png'),
      name: 'وحيد القرن',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
      character: 'و',
    },
    {
      image: require('../../assets/images/animal28.png'),
      name: 'يمامة',
      character: 'ي',
      car: require('../../assets/images/car-animal-board.png'),
      numberLetterContainer: require('../../assets/images/letter-board.png'),
    },
  ];
  const plants = [
    {
      image: require('../../assets/images/plant1.png'),
      name: 'أناناس',
      character: 'أ',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant2.png'),
      name: 'بطيخ',
      character: 'ب',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant3.png'),
      name: 'تفاح',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ت',
    },
    {
      image: require('../../assets/images/plant4.png'),
      name: 'ثوم',
      character: 'ث',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant5.png'),
      name: 'جزر',
      character: 'ج',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant6.png'),
      name: 'حمص',
      character: 'ح',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant7.png'),
      name: 'خوخ',
      character: 'خ',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant8.png'),
      name: 'دوار الشمس',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'د',
    },
    {
      image: require('../../assets/images/plant9.png'),
      name: 'ذرة',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ذ',
    },
    {
      image: require('../../assets/images/plant10.png'),
      name: 'رمان',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ر',
    },
    {
      image: require('../../assets/images/plant11.png'),
      name: 'زيتون',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ز',
    },
    {
      image: require('../../assets/images/plant12.png'),
      name: 'سمسم',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'س',
    },
    {
      image: require('../../assets/images/plant13.png'),
      name: 'شاي',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ش',
    },
    {
      image: require('../../assets/images/plant14.png'),
      name: 'صبار',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ص',
    },
    {
      image: require('../../assets/images/plant15.png'),
      name: 'ضرم',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ض',
    },
    {
      image: require('../../assets/images/plant16.png'),
      name: 'طماطم',
      character: 'ط',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant17.png'),
      name: 'ظيان',
      character: 'ظ',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant18.png'),
      name: 'عنب',
      character: 'ع',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant19.png'),
      name: 'غار',
      character: 'غ',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant20.png'),
      name: 'فراولة',
      character: 'ف',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant21.png'),
      name: 'قرع',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ق',
    },
    {
      image: require('../../assets/images/plant22.png'),
      name: 'كرز',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ك',
    },
    {
      image: require('../../assets/images/plant23.png'),
      name: 'ليمون',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ل',
    },
    {
      image: require('../../assets/images/plant24.png'),
      name: 'موز',
      character: 'م',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
    },
    {
      image: require('../../assets/images/plant25.png'),
      name: 'نخلة',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ن',
    },
    {
      image: require('../../assets/images/plant26.png'),
      name: 'هيل',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ه',
    },
    {
      image: require('../../assets/images/plant27.png'),
      name: 'وردة',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'و',
    },
    {
      image: require('../../assets/images/plant28.png'),
      name: 'يوسفي',
      car: require('../../assets/images/car-plants-main.png'),
      numberLetterContainer: require('../../assets/images/car-plants-board.png'),
      character: 'ي',
    },
  ];

  const onSwipeUp = gestureState => {
    // this.setState({myText: 'You swiped up!'});
    console.log('You swiped up!');
  };

  const onSwipeDown = gestureState => {
    // this.setState({myText: 'You swiped down!'});
    console.log('You swiped down!');
  };

  const onSwipeLeft = gestureState => {
    // this.setState({myText: 'You swiped left!'});
    console.log('You swiped left!');
  };

  const onSwipeRight = gestureState => {
    // this.setState({myText: 'You swiped right!'});
    console.log('You swiped right!');
  };

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    // this.setState({gestureName: gestureName});
    // switch (gestureName) {
    //   case SWIPE_UP:
    //     this.setState({backgroundColor: 'red'});
    //     break;
    //   case SWIPE_DOWN:
    //     this.setState({backgroundColor: 'green'});
    //     break;
    //   case SWIPE_LEFT:
    //     this.setState({backgroundColor: 'blue'});
    //     break;
    //   case SWIPE_RIGHT:
    //     this.setState({backgroundColor: 'yellow'});
    //     break;
    // }
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

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
    // alert('startRecording');
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
  const leftPosition = new Animated.Value(0);

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

  const stopAnimation = () => {
    this.setState({
      leftPosition: leftPosition, // this forces the left position to remain the same considering the `componentDidMount` method already happened
    });
  };
  const mooveLR = () => {
    Animated.timing(leftPosition, {
      toValue: 100,
      duration: 900, // the duration of the animation
      easing: Easing.linear, // the style of animation
    }).start(); // starts this annimation once this method is called
  };

  const mooveRL = () => {
    Animated.timing(leftPosition, {
      toValue: 0,
      duration: 3000, // the duration of the animation
      easing: Easing.linear, // the style of animation
    }).start(); // starts this annimation once this method is called
  };

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

    // mooveLR();
    playBackgroundSound();
  }, []);

  useEffect(() => {
    const backAction = () => {
      // Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => null,
      //     style: 'cancel',
      //   },
      //   {text: 'YES', onPress: () => BackHandler.exitApp()},
      // ]);
      SoundPlayer.stop();
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
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

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);

      if (appState.current == 'background') {
        SoundPlayer.stop();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  var workingArrayObject = animals;

  useEffect(() => {}, []);

  const handlingGridOrImageView = object => {
    var view;
    if (shape === SelectedShape.Animals || shape === SelectedShape.Plants) {
      view = (
        <Image
          source={object.image}
          style={{
            // resizeMode: 'stretch',
            resizeMode: 'contain',
            // resizeMode: 'cover',
            // flex: 1,
            width: 120,
            // height: '100%',
            // marginLeft: 200,
            // marginTop: 40,
            // paddingLeft: 30,
            // margin:
            // width: '100%',
          }}
        />
      );
    } else {
      if (shape === SelectedShape.Fishes || shape === SelectedShape.Breads) {
        var imageList = [];
        var count = parseInt(object.character);
        for (let i = 0; i < count; i++) {
          var image = (
            <View>
              <Image
                source={object.image}
                style={{
                  // resizeMode: 'stretch',
                  resizeMode: 'contain',
                  // resizeMode: 'cover',
                  // flex: 1,
                  width: 40,
                  height: 40,
                  // marginLeft: 200,
                  // marginTop: 40,
                  // paddingLeft: 30,
                  // width: '100%',
                  // margin: 5,
                  // padding: 5,
                }}
              />
            </View>
          );
          imageList.push(image);
        }
        view = (
          <FlatGrid
            itemDimension={0}
            data={imageList}
            spacing={0}
            adjustGridToStyles={true}
            style={{
              // backgroundColor: 'red',
              width: 200,
              height: 100,
              marginRight: -100,
              marginTop: -70,
            }}
            // fixed={true}
            maxItemsPerRow={5}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        );
      }
    }

    return view;
  };

  const mappedBodyViewObject = () => {
    if (shape === SelectedShape.Animals) {
      workingArrayObject = animals;
    } else {
      if (shape === SelectedShape.Plants) {
        workingArrayObject = plants;
      } else {
        if (shape === SelectedShape.Fishes) {
          workingArrayObject = fishes;
        } else {
          workingArrayObject = breads;
        }
      }
    }

    return workingArrayObject.slice(1).map((object, index) => {
      return (
        <View
          key={object.image}
          style={{
            // backgroundColor: 'yellow',
            width: '100%',
            height: '100%',
            // position: 'absolute',
            flexDirection: 'row',
          }}>
          <View
            key="1"
            style={{
              // backgroundColor: 'yellow',
              // width: '100%',
              // height: '100%',
              flex: 1,
              // position: 'absolute',
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
                    }}
                  />
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
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  // backgroundColor: 'green'
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}>
                <Image
                  source={object.car}
                  style={{
                    // resizeMode: 'stretch',
                    resizeMode: 'contain',
                    // resizeMode: 'cover',
                    // flex: 1,
                    height: '160%',
                    marginLeft: -40,
                    marginTop: -50,
                    // marginBottom: 50,
                    width: '160%',
                  }}
                />

                <View
                  style={{
                    height: '90%',
                    width: '75%',
                    position: 'absolute',
                    // backgroundColor: 'red',
                    // opacity: 0.5,
                    // margin: 50,
                    marginTop: 50,
                    // marginBottom: 100,
                    marginRight: 50,
                    flex: 1,
                    marginLeft: 75,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      // backgroundColor: 'green',
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      flexDirection: 'row',
                      // padding: 20,
                      justifyContent: 'flex-end',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 12,
                      paddingTop: 2,
                      marginLeft: 105,
                      marginTop: -60,
                    }}>
                    <View
                      style={{
                        width: 110,
                        height: '100%',
                      }}>
                      <Image
                        source={object.numberLetterContainer}
                        style={{
                          // resizeMode: 'stretch',
                          resizeMode: 'contain',
                          // resizeMode: 'cover',
                          // flex: 1,
                          // width: 110,
                          height: '100%',
                          // marginLeft: 200,
                          // marginTop: 40,
                          // paddingLeft: 30,
                          // margin:
                          width: '100%',
                        }}
                      />

                      <View
                        style={{
                          height: '100%',
                          // backgroundColor: 'red',
                          width: '100%',
                          position: 'absolute',
                          textAlign: 'center',
                          // flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'myriad_arabic_bold',
                            fontSize: 90,
                            color: '#000000',
                          }}>
                          {object.character}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      // backgroundColor: 'green',
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      // flexDirection: 'row',
                      // padding: 20,
                      justifyContent: 'flex-end',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 40,
                      // paddingTop: 2,
                    }}>
                    <Image
                      source={
                        shape === SelectedShape.Animals ||
                        shape === SelectedShape.Plants
                          ? require('../../assets/images/animal-name-board.png')
                          : null
                      }
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        width: 150,
                        // height: '100%',
                        // marginLeft: 200,
                        // marginTop: 40,
                        // paddingLeft: 30,
                        // margin:
                        // width: '100%',
                      }}
                    />
                    <View
                      style={{
                        height: '100%',
                        // backgroundColor: 'red',
                        width: '100%',
                        position: 'absolute',
                        textAlign: 'center',
                        // flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingRight: 20,
                        paddingBottom: 6,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'myriad_arabic_regular',
                          fontSize: 27,
                          color: '#000000',
                        }}>
                        {object.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: '100%',
                        // backgroundColor: 'red',
                        width: '100%',
                        position: 'absolute',
                        // textAlign: 'center',
                        // flex: 1,
                        // justifyContent: 'flex-end',
                        justifyContent: 'center',

                        alignItems: 'center',
                        paddingRight: 50,
                        // paddingBottom: 6,
                      }}>
                      {handlingGridOrImageView(object)}
                    </View>
                  </View>
                </View>
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
                      }}></View>
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
                    {/* <ShowChoosenChImage
    // choosen_ch={2}
    choosen_ch={route.params.choosen_ch}
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
  /> */}
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
                {/* <Image
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
/> */}

                {/* <ShowChoosenTrainCarImage
          choosen_ch={route.params.choosen_ch}
          // choosen_ch={2}
          style={{
            // resizeMode: 'stretch',
            resizeMode: 'contain',
            // resizeMode: 'cover',
            // flex: 1,
            height: 140,
            width: '100%',
            // height: 80,
          }}
        /> */}
              </View>
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
        // width: '100%',
        // height: '100%',
      }}>
      {/* <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeUp={state => onSwipeUp(state)}
        onSwipeDown={state => onSwipeDown(state)}
        onSwipeLeft={state => onSwipeLeft(state)}
        onSwipeRight={state => onSwipeRight(state)}
        config={config}> */}

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
          // justifyContent: 'center',
          // alignItems: 'center',
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

        {bg === SelectedBG.Jungle && (
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
        )}
        {bg === SelectedBG.Jungle && (
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
                source={
                  require('../../assets/images/all-trees.png')
                  // : require('../../assets/images/city.png')
                }
                duration={12000}
              />
            </View>
          </View>
        )}

        {bg === SelectedBG.Buildings && (
          <View
            style={{
              height: 200,
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
              source={require('../../assets/images/city_bg_level1.png')}
              duration={20000}
            />
          </View>
        )}
        {bg === SelectedBG.Buildings && (
          <View
            style={{
              height: 250,
              // flex: 1,
              // height: '90%',
              width: '100%',
              position: 'absolute',
              // backgroundColor: 'yellow',
            }}>
            <View
              style={{
                height: 100,
              }}>
              <LoopAnimation
                style={{
                  width: '100%',
                  // height: '100%',
                }}
                source={require('../../assets/images/city_bg_level2.png')}
                duration={12000}
              />
            </View>
          </View>
        )}

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

        {/* ========================
============================== */}

        <View
          // key="1"
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
                      source={
                        changeCloudStars
                          ? require('../../assets/images/night_button.png')
                          : require('../../assets/images/day_button.png')
                      }
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
                          : require('../../assets/images/sound-button-off.png')
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
                // justifyContent: 'center',
                // alignItems: 'center',
              }}>
              {/* <Image
                // source={require('../../assets/images/train_body.png')}
                source={require('../../assets/images/car-animal-board.png')}
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
              /> */}

              <View
                style={{
                  height: '90%',
                  width: '75%',
                  position: 'absolute',
                  // backgroundColor: 'red',
                  // opacity: 0.5,
                  // margin: 50,
                  marginTop: 50,
                  // marginBottom: 100,
                  marginRight: 50,
                  flex: 1,
                  marginLeft: 75,
                }}>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: 'green',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    flexDirection: 'row',
                    // padding: 20,
                    justifyContent: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 12,
                    paddingTop: 2,
                  }}>
                  <View
                    style={{
                      width: 110,
                      height: '100%',
                    }}>
                    {/* <Image
                      source={require('../../assets/images/letter-board.png')}
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        // width: 110,
                        height: '100%',
                        // marginLeft: 200,
                        // marginTop: 40,
                        // paddingLeft: 30,
                        // margin:
                        width: '100%',
                      }}
                    /> */}
                    <View
                      style={{
                        height: '100%',
                        // backgroundColor: 'red',
                        width: '100%',
                        position: 'absolute',
                        textAlign: 'center',
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {/* <Text
                        style={{
                          fontFamily: 'myriad_arabic_bold',
                          fontSize: 90,
                          color: '#000000',
                        }}>
                        ب
                      </Text> */}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: 'green',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    // flexDirection: 'row',
                    // padding: 20,
                    justifyContent: 'flex-end',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 40,
                    // paddingTop: 2,
                  }}>
                  {/* <Image
                    source={require('../../assets/images/animal-name-board.png')}
                    style={{
                      // resizeMode: 'stretch',
                      resizeMode: 'contain',
                      // resizeMode: 'cover',
                      // flex: 1,
                      width: 150,
                      // height: '100%',
                      // marginLeft: 200,
                      // marginTop: 40,
                      // paddingLeft: 30,
                      // margin:
                      // width: '100%',
                    }}
                  /> */}
                  <View
                    style={{
                      height: '100%',
                      // backgroundColor: 'red',
                      width: '100%',
                      position: 'absolute',
                      textAlign: 'center',
                      // flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      paddingRight: 20,
                      paddingBottom: 6,
                    }}>
                    {/* <Text
                      style={{
                        fontFamily: 'myriad_arabic_regular',
                        fontSize: 27,
                        color: '#000000',
                      }}>
                      بقره
                    </Text> */}
                  </View>
                  <View
                    style={{
                      height: '100%',
                      // backgroundColor: 'red',
                      width: '100%',
                      position: 'absolute',
                      // textAlign: 'center',
                      // flex: 1,
                      // justifyContent: 'flex-end',
                      justifyContent: 'center',

                      alignItems: 'center',
                      paddingRight: 50,
                      // paddingBottom: 6,
                    }}>
                    {/* <Image
                      source={require('../../assets/images/' +
                        currentAnimalName)}
                      style={{
                        // resizeMode: 'stretch',
                        resizeMode: 'contain',
                        // resizeMode: 'cover',
                        // flex: 1,
                        width: 70,
                        // height: '100%',
                        // marginLeft: 200,
                        // marginTop: 40,
                        // paddingLeft: 30,
                        // margin:
                        // width: '100%',
                      }}
                    /> */}
                  </View>
                </View>
              </View>
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
                  {/* <View
                    style={{
                      // flex: 1,
                      // position: 'absolute',
                      backgroundColor: '#fe8d1a',
                      width: 160,
                      height: 40,
                      // marginTop: 70,
                    }}
                  /> */}
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
                    {/* <TouchableOpacity onPress={startRecording}>
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
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={stopRecording}>
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
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={playRecording}>
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
                    </TouchableOpacity> */}
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
                    // choosen_ch={2}
                    choosen_ch={route.params.choosen_ch}
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
              {/* <Image
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
                /> */}

              {/* <ShowChoosenTrainCarImage
                choosen_ch={route.params.choosen_ch}
                // choosen_ch={2}
                style={{
                  // resizeMode: 'stretch',
                  resizeMode: 'contain',
                  // resizeMode: 'cover',
                  // flex: 1,
                  height: 140,
                  width: '100%',
                  // height: 80,
                }}
              /> */}
            </View>
          </View>
        </View>
        {/* ============= */}
        <View
          style={{
            // backgroundColor: 'yellow',
            width: '100%',
            height: '80%',
            marginBottom: 130,
            // paddingBottom: 100,
            // opacity: 0.5,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          <AnimatedPagerView
            style={{
              // backgroundColor: 'yellow',
              // width: '100%',
              // height: '100%',
              flex: 1,
              // position: 'absolute',
              flexDirection: 'row',
            }}
            layoutDirection="ltr"
            // layoutDirection="rtl"
            // layoutDirection="locale"

            pageMargin={0}
            orientation="horizontal"
            // transitionStyle="scroll"
            transitionStyle="curl"
            initialPage={0}>
            <View
              key="1"
              style={{
                // backgroundColor: 'yellow',
                // width: '100%',
                // height: '100%',
                flex: 1,
                // position: 'absolute',
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
                      {/* <TouchableOpacity onPress={toggleBg}>
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
                  </TouchableOpacity> */}
                      {/* <TouchableOpacity onPress={playBackgroundSound}>
                    <Image
                      source={
                        soundBgPlaying
                          ? require('../../assets/images/sound-button.png')
                          : require('../../assets/images/sound-button-off.png')
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
                  </TouchableOpacity> */}
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
                      {/* <TouchableOpacity onPress={goToHome}>
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
                  </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 4,
                    // backgroundColor: 'green'
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  {shape === SelectedShape.Plants && (
                    <Image
                      source={plants[0].car}
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
                  )}
                  {shape === SelectedShape.Animals && (
                    <Image
                      source={animals[0].car}
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
                  )}
                  {shape === SelectedShape.Fishes && (
                    <Image
                      source={fishes[0].car}
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
                  )}
                  {shape === SelectedShape.Breads && (
                    <Image
                      source={breads[0].car}
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
                  )}
                  <View
                    style={{
                      height: '90%',
                      width: '75%',
                      position: 'absolute',
                      // backgroundColor: 'red',
                      // opacity: 0.5,
                      // margin: 50,
                      marginTop: 50,
                      // marginBottom: 100,
                      marginRight: 50,
                      flex: 1,
                      marginLeft: 75,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'green',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        flexDirection: 'row',
                        // padding: 20,
                        justifyContent: 'flex-end',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 12,
                        paddingTop: 2,
                      }}>
                      <View
                        style={{
                          width: 110,
                          height: '100%',
                        }}>
                        {shape === SelectedShape.Breads && (
                          <Image
                            source={breads[0].numberLetterContainer}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              // width: 110,
                              height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Animals && (
                          <Image
                            source={animals[0].numberLetterContainer}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              // width: 110,
                              height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Plants && (
                          <Image
                            source={plants[0].numberLetterContainer}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              // width: 110,
                              height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Fishes && (
                          <Image
                            source={fishes[0].numberLetterContainer}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              // width: 110,
                              height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              width: '100%',
                            }}
                          />
                        )}
                        <View
                          style={{
                            height: '100%',
                            // backgroundColor: 'red',
                            width: '100%',
                            position: 'absolute',
                            textAlign: 'center',
                            // flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'myriad_arabic_bold',
                              fontSize: 90,
                              color: '#000000',
                            }}>
                            {shape === SelectedShape.Animals &&
                              animals[0].character}
                            {shape === SelectedShape.Plants &&
                              plants[0].character}
                            {shape === SelectedShape.Fishes &&
                              fishes[0].character}
                            {shape === SelectedShape.Breads &&
                              breads[0].character}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'green',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        // flexDirection: 'row',
                        // padding: 20,
                        justifyContent: 'flex-end',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 40,
                        // paddingTop: 2,
                      }}>
                      {shape === SelectedShape.Animals && (
                        <Image
                          source={require('../../assets/images/animal-name-board.png')}
                          style={{
                            // resizeMode: 'stretch',
                            resizeMode: 'contain',
                            // resizeMode: 'cover',
                            // flex: 1,
                            width: 150,
                            // height: '100%',
                            // marginLeft: 200,
                            // marginTop: 40,
                            // paddingLeft: 30,
                            // margin:
                            // width: '100%',
                          }}
                        />
                      )}
                      {shape === SelectedShape.Plants && (
                        <Image
                          source={require('../../assets/images/animal-name-board.png')}
                          style={{
                            // resizeMode: 'stretch',
                            resizeMode: 'contain',
                            // resizeMode: 'cover',
                            // flex: 1,
                            width: 150,
                            // height: '100%',
                            // marginLeft: 200,
                            // marginTop: 40,
                            // paddingLeft: 30,
                            // margin:
                            // width: '100%',
                          }}
                        />
                      )}
                      <View
                        style={{
                          height: '100%',
                          // backgroundColor: 'red',
                          width: '100%',
                          position: 'absolute',
                          textAlign: 'center',
                          // flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          paddingRight: 20,
                          paddingBottom: 6,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'myriad_arabic_regular',
                            fontSize: 27,
                            color: '#000000',
                          }}>
                          {shape === SelectedShape.Animals && animals[0].name}
                          {shape === SelectedShape.Plants && plants[0].name}
                          {shape === SelectedShape.Fishes && fishes[0].name}
                          {shape === SelectedShape.Breads && breads[0].name}
                        </Text>
                      </View>
                      <View
                        style={{
                          height: '100%',
                          // backgroundColor: 'red',
                          width: '100%',
                          position: 'absolute',
                          // textAlign: 'center',
                          // flex: 1,
                          // justifyContent: 'flex-end',
                          justifyContent: 'center',

                          alignItems: 'center',
                          paddingRight: 50,
                          // paddingBottom: 6,
                        }}>
                        {shape === SelectedShape.Animals && (
                          <Image
                            source={animals[0].image}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              width: 70,
                              // height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              // width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Plants && (
                          <Image
                            source={plants[0].image}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              width: 70,
                              // height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              // width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Fishes && (
                          <Image
                            source={fishes[0].image}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              width: 70,
                              // height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              // width: '100%',
                            }}
                          />
                        )}
                        {shape === SelectedShape.Breads && (
                          <Image
                            source={breads[0].image}
                            style={{
                              // resizeMode: 'stretch',
                              resizeMode: 'contain',
                              // resizeMode: 'cover',
                              // flex: 1,
                              width: 70,
                              // height: '100%',
                              // marginLeft: 200,
                              // marginTop: 40,
                              // paddingLeft: 30,
                              // margin:
                              // width: '100%',
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </View>
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
                      {/* <View
                        style={{
                          // flex: 1,
                          // position: 'absolute',
                          backgroundColor: '#fe8d1a',
                          width: 160,
                          height: 40,
                          // marginTop: 70,
                        }}
                      /> */}
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
                        {/* <TouchableOpacity onPress={startRecording}>
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
                    </TouchableOpacity> */}
                        {/* <TouchableOpacity onPress={stopRecording}>
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
                    </TouchableOpacity> */}
                        {/* <TouchableOpacity onPress={playRecording}>
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
                    </TouchableOpacity> */}
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
                      {/* <ShowChoosenChImage
                    // choosen_ch={2}
                    choosen_ch={route.params.choosen_ch}
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
                  /> */}
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
                  {/* <Image
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
                /> */}

                  <ShowChoosenTrainCarImage
                    choosen_ch={route.params.choosen_ch}
                    // choosen_ch={2}
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

            {mappedBodyViewObject()}
            {/* {!!workingArrayObject &&
              workingArrayObject.slice(1).map((object, index) => {
                mappedBodyViewObject(object);
              })} */}
            {/* {shape === SelectedShape.Plants &&
              plants.slice(1).map((object, index) => {
                return mappedBodyViewObject(plants[index]);
              })} */}

            {/* {shape === SelectedShape.Fishes &&
              fishes.slice(1).map((object, index) => {
                return mappedBodyViewObject(object);
              })}
            {shape === SelectedShape.Breads &&
              breads.slice(1).map((object, index) => {
                return mappedBodyViewObject(object);
              })} */}
          </AnimatedPagerView>
        </View>
        {/* ================= */}
        <View
          // key="1"
          style={{
            // backgroundColor: 'red',
            width: '100%',
            // opacity: 0.5,
            height: '10%',
            position: 'absolute',
            flexDirection: 'row',
            // paddingBottom: 20,
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
                // backgroundColor: 'pink',
                marginTop: -30,
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
                    marginTop: 0,
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
                  }}></View>
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
              }}></View>
          </View>
        </View>

        {/* ================= */}
      </View>

      {/* </GestureRecognizer> */}

      {/* <View
        style={{
          position: 'absolute',
          backgroundColor: 'red',
        }}>
        <ReactSWF
          src={require('../../assets/swfs/bumble-bee1.swf')}
          id="guid_001"
          width="300"
          height="200"
          wmode="transparent"
          flashVars={{foo: 'A', bar: 1}}
        />
      </View> */}

      {/* <View style={styles.main_container}>
        <Animated.View
          style={
            ([
              {
                // justifyContent: 'center',
                // alignItems: 'center',
                // backgroundColor: 'red',
                // // width: '100%',
                // // position: 'absolute',
                // // flex: 1,
                // height: '100%',
              },
            ],
            [{left: leftPosition}])
          }>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
              // width: '100%',
              // position: 'absolute',
              // flex: 1,
              height: '100%',
            }}>
            <TouchableOpacity onPress={() => stopAnimation()}>
              <Text>Stop animation</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View> */}
    </View>
  );
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
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});
