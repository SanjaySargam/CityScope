import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import Post from '../components/Cards/Post';

const dummyData = [
  {
    id: '1',
    imageSrc: 'https://images.indianexpress.com/2022/03/ch1567391.jpg?w=414',
    userName: 'Vaishnvai Sirimalla',
    description: 'The trains are late by an hour',
  },
  {
    id: '2',
    imageSrc: 'https://miro.medium.com/v2/da:true/resize:fit:1200/0*86sRegYlwBxONTNU',
    userName: 'Mahesh Dalvi',
    description: 'Free waffles today on waffle day at RangRas Cafe',
  },
  {
    id: '3',
    imageSrc: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/567d3af9-ebb4-493e-91f5-552cfc97f768.jpg&w=735&h=490&q=80',
    userName: 'Anjali Mehta',
    description: 'Road accidents in India claimed 415 lives, injured 1,286 people each day',
  },
  {
    id: '4',
    imageSrc: 'https://balloonpro.in/wp-content/uploads/2020/06/8df3c5d3-837e-4bbb-ba00-050b1a022201.webp',
    userName: 'Sanjay Sargam',
    description: 'Shop Opening Ceremony at 7.00PM on 27/July/2024',
  },
  {
    id: '5',
    imageSrc: 'https://i.ytimg.com/vi/yeyOIzO9htI/hqdefault.jpg',
    userName: 'Khushi Sharma',
    description: 'Join me on KhushiChannel for [brief focus—e.g., `tech tips,` `delicious recipes,` `exciting travel vlogs`] and more!',
  },
  // Add more dummy data as needed
];


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Welcome to HomeScreen!',
    };
  }

  updateMessage = () => {
    this.setState({ message: 'You have clicked the button!' });
  };

  renderItem = ({ item }) => (
    <Post
      imageSrc={item.imageSrc}
      userName={item.userName}
      description={item.description}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', margin:10,alignContent:'center',alignItems:'center'}}>
          <Text style={{color:'black', fontSize:24}}>CityScope</Text>
          <Text style={{color:'black', fontSize:20}}> Bhiwandi</Text>
        </View>
        <FlatList
        style={{
          margin:5
        }}
        data={dummyData}
        renderItem={this.renderItem}
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
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black'
  },
});

export default HomeScreen;
