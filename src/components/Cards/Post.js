import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ imageSrc, userName, description }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  userName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default Post;
