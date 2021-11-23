/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header, Button} from 'react-native/Libraries/NewAppScreen';

import RNTest from 'react-native-library-example';

const App = () => {
  const [nativeResult, setNativeResult] = useState('nothing');
  const [deviceId, setDeviceId] = useState('uknown');
  const [coolFeature, setCoolFeature] = useState('not cool');

  const getNativeResult = async () => {
    setNativeResult('loading...');
    try {
      const response = await RNTest.getValue();
      setNativeResult(response);
    } catch (e) {
      setNativeResult(e);
    }
  };

  const getDeviceId = async () => {
    setDeviceId('loading...');
    try {
      const {id} = await RNTest.requestDeviceId();
      setDeviceId(id);
    } catch (e) {
      setDeviceId(e);
    }
  };

  const getCoolFeature = async () => {
    setCoolFeature('loading...');
    try {
      const response = await RNTest.coolFeature();
      setCoolFeature(response);
    } catch (e) {
      setCoolFeature(e);
    }
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>
            From our Native platform: {nativeResult}
          </Text>
          <Button
            onPress={getNativeResult}
            title="Run Native Code"
            color="#841584"
            accessibilityLabel="Run Native Code Button"
          />
          <Text style={styles.instructions}>Device id: {deviceId}</Text>
          <Button
            onPress={getDeviceId}
            title="Get Device Id"
            color="#841584"
            accessibilityLabel="Get Device Id Button"
          />
          <Text style={styles.instructions}>Cool feature: {coolFeature}</Text>
          <Button
            onPress={getCoolFeature}
            title="Get Device Id"
            color="#841584"
            accessibilityLabel="Get Device Id Button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
