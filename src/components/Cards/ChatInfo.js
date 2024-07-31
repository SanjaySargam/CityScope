import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatInfo = ({ profilePic, userName }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
});

export default ChatInfo;
