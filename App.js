import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import jokes from './jokes';

export default function App() {

  const [joke, setJoke] = useState('');

  return (

    <View style={styles.container}>

      <View style={styles.titles}>

        <Text style={styles.title}>Joke Generator</Text>
        <Text style={styles.citation}>145 Best Dad Jokes That Will Have the Whole Family Laughing</Text>
        <Pressable
          style={styles.button}
          onPress={() => setJoke(jokes[Math.floor(Math.random() * jokes.length)])}
        >
          <Text style={styles.buttonText}>Tell me a joke</Text>
        </Pressable>

        <Text style={styles.subtitles}>{joke}</Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: '20%',
    width: '100%',
    height: '100%',
  },
  titles: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitles: {
    alignContent: 'center',
    textAlign: 'center',
    marginTop: '50%',
    fontSize: 20,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 8,
    backgroundColor: 'black',
    position: 'relative',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  citation: {
    position: 'relative',
    bottom: 0,
    fontSize: 12,
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  }
});
