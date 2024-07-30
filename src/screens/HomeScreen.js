import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Welcome to My Screen!',
    };
  }

  updateMessage = () => {
    this.setState({ message: 'You have clicked the button!' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.state.message}</Text>
        <Button title="Click Me" onPress={this.updateMessage} />
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
  },
});

export default HomeScreen;
