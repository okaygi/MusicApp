import React, { useState, useSyncExternalStore } from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View } from "react-native";
import musicData from './src/SongCard/music-data.json';
import SongCard from './src/SongCard/songCard';
import SearchBar from './src/SearchBar';

function App() {
  const [list, setList] = useState(musicData);
  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator} />


  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList)
  };




  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
})