import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const DiceNumbers = [
    DiceOne,
    DiceTwo,
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix,
  ];

  const playButtonTapped = () => {
    //Logic
    const randomIndex1 = Math.floor(Math.random() * 5) + 1;
    setIndex1(randomIndex1);
    const randomIndex2 = Math.floor(Math.random() * 5) + 1;
    setIndex2(randomIndex2);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={DiceNumbers[index2]} />
      <Image style={styles.image} source={DiceNumbers[index1]} />
      <TouchableOpacity onPress={playButtonTapped}>
        <Text style={styles.gamePlayButton}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
