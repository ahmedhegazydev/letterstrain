import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
// import ListAllNewsScreen from './ListAllNews';

// import PreviewNewsDetailsScreen from './PreviewNewsDetails';
// import {ThemeContext} from '../../util/ThemeManager';
// import {LocalizationContext} from '../../contexts/LocalizationContext';
import {
  LOADING_NAME,
  SPLASH_NAME,
  CHARACTER_CHOOSE_NAME,
  NUMBERS_OR_LETTERS_CHOOSE_NAME,
  BG_SHAPE_CHOOSE_NAME,
  START_GAME_CHOOSE_NAME,
} from '../constants/constants';
import SplashScreen from './screens/SplashScreen';
import LoadingScreen from './screens/LoadingScreen';
import {NavigationContainer} from '@react-navigation/native';
import CharactersChoose from './screens/CharactersChoose';
import ChooseNumbersOrLetters from './screens/ChooseNumbersOrLetters';
import ChooseBgAndShape from './screens/ChooseBgAndShape';
import PlayTrainScreen from './screens/PlayTrainScreen';
const Stack = createStackNavigator();

export default function MainContainer() {
  //   const {toggleTheme} = React.useContext(ThemeContext);

  const Url_Settings = 'myapp://settings';
  // const Url_Details = `myapp://${MORE_DETAILS_NEWS_NAME}`;
  const Url_Details = 'myapp://details';
  const Url_All_News = 'myapp://allNews';
  const leftToRightAnimation = {
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [-layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  //   const {translate} = useContext(LocalizationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          //   animation: 'fade',
          // headerTitleStyle: {
          //   paddingLeft: "20%",
          //   paddingRight: "20%",
          // },
          headerStyle: {
            // paddingRight: 40,
            // paddingLeft: 40,
          },
          headerRight: () => (
            <View style={{marginRight: 11}}>
              {/* <Button
                color="orange"
                  title={translate('toggle_theme')}
                onPress={() => {
                  // toggleTheme();
                }}
              /> */}
            </View>
          ),
        }}>
        {/* <Stack.Screen
          options={({route}) => ({title: 'Splash', headerShown: false})}
          name={SPLASH_NAME}
          component={SplashScreen}
        />
        <Stack.Screen
          options={({route}) => ({title: 'Loading', headerShown: false})}
          name={LOADING_NAME}
          component={LoadingScreen}
        /> */}
        {/* <Stack.Screen
          options={({route}) => ({
            title: 'CharactersChoose',
            headerShown: false,
            leftToRightAnimation,
          })}
          name={CHARACTER_CHOOSE_NAME}
          component={CharactersChoose}
        /> */}
        {/* <Stack.Screen
          options={({route}) => ({
            title: 'ChooseNumbersOrLetters',
            headerShown: false,
            leftToRightAnimation,
          })}
          name={NUMBERS_OR_LETTERS_CHOOSE_NAME}
          component={ChooseNumbersOrLetters}
        /> */}
        <Stack.Screen
          options={({route}) => ({
            title: 'ChooseBgAndShape',
            headerShown: false,
            leftToRightAnimation,
          })}
          name={BG_SHAPE_CHOOSE_NAME}
          component={ChooseBgAndShape}
        />
        {/* <Stack.Screen
          options={({route}) => ({
            title: 'ChooseBgAndShape',
            headerShown: false,
            leftToRightAnimation,
          })}
          name={START_GAME_CHOOSE_NAME}
          component={PlayTrainScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btn_toggle_theme: {
    padding: 30,
  },
});
