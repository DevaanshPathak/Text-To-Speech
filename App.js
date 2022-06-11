import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ExpoFont,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <ImageBackground
          source={require('./assets/bg.jpg')}
          style={styles.backgroundImage}>
          <Header
            backgroundColor={'#07B89E'}
            centerComponent={{
              text: 'Text To Speech Converter',
              style: { color: 'black', fontSize: 15, fontWeight: 700 },
            }}
          />

          <Image
            style={styles.imageIcon}
            source={{
              uri: 'https://i.pinimg.com/originals/c1/73/fe/c173fe2f8bdcb8b3068b0ea58437e96a.png',
            }}
          />

          <Text style={styles.text2}> Enter The Word </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            value={this.state.text}
          />
         
          <View>
            <TouchableOpacity style={styles.button} onPress={this.speak}>
              <Image
                source={require('./assets/speaker.png')}
                style={{ height: 25, width: 25 }}
              />
              <Text style={styles.text2}> Click Here To Hear Speech </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'black',
    marginTop: -25,

    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
