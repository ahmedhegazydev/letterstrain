import React, {useState, useContext, useEffect, createRef, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  ThemeProvider,
  ThemeContext,
  useThemeContext,
} from '../../util/ThemeManager';

export default function Title({
  children,
  numberOfLines = 2,
  size = 18,
}: {
  children: {},
  numberOfLines: any,
  size: any,
}) {
  const {theme} = useThemeContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text
        numberOfLines={numberOfLines}
        style={[theme === 'light' ? styles.titlelight : styles.titledark]}
      >
        {children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titlelight: {
    fontWeight: 'bold',
    color: 'black',
  },
  titledark: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  container: {},
});
