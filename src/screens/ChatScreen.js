import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import ChatInfo from '../components/Cards/ChatInfo';

const chatInfo = [
  {
    id: 1,
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OznfP0wzIokRgibr92whysuVxgeCQrY-zQ&s',
    userName: 'Alice Smith'
  },
  {
    id: 2,
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Wahlberg_2021.jpg/330px-Mark_Wahlberg_2021.jpg',
    userName: 'Mahesh Dalvi'
  },
  {
    id: 3,
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrycpYEE_j3OFS9hRB_I2i5hTc50qH0B4Ng&s',
    userName: 'Anjali Mehta'
  },
  {
    id: 4,
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Wahlberg_2021.jpg/330px-Mark_Wahlberg_2021.jpg',
    userName: 'Sanjay Sargam'
  },
  {
    id: 5,
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtodrdmecGZO5HYuyQr2Khcww9S_FONRF5A&s',
    userName: 'Khushi Sharma'
  }
];


class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Welcome to ChatScreen!',
    };
  }

  updateMessage = () => {
    this.setState({message: 'You have clicked the button!'});
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 24}}>Chat</Text>
        </View>
        <FlatList
          style={{
            margin: 5,
          }}
          data={chatInfo}
          renderItem={({ item }) => (
            <ChatInfo profilePic={item.profilePic} userName={item.userName} />
          )}
            keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default ChatScreen;
