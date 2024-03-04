import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Main = () => {
  const [title, setTitle] = useState('');
  const [words, setWords] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTextAdded, setIsTextAdded] = useState(false);

  const handleAddText = () => {
    const newText = `${title}: ${words}\n${displayedText}`;
    setDisplayedText(newText);
    setTitle('');
    setWords('');
    setIsTextAdded(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter words"
        value={words}
        onChangeText={text => setWords(text)}
      />

      <Button title="Add Text" onPress={handleAddText} />

      {isTextAdded && (
        <View>
          <Text style={styles.displayedText}>{displayedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  displayedText: {
    marginTop: 20,
  },
});

export default Main;
