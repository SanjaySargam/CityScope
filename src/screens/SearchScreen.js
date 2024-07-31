import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Welcome to Search!',
    };
  }

  updateMessage = () => {
    this.setState({ message: 'You have clicked the button!' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black'
  },
});

export default SearchScreen;
