/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import BmiAndFrameSize from './components/BmiAndFrameSize';
import BmiInfo from './components/BmiInfo';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <BmiAndFrameSize/>
        <BmiInfo/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
});
