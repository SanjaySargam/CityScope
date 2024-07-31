import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const community = {
    title: "Community Title",
    icon: "https://example.com/community-icon.png", // replace with actual icon URL
  };

  const communities = [
    {
      id: '1',
      title: 'Local News',
      icon: 'https://www.shutterstock.com/image-vector/local-news-world-icon-260nw-1320807110.jpg', // replace with actual icon URL
    },
    {
      id: '2',
      title: 'Transportation',
      icon: 'https://e7.pngegg.com/pngimages/644/485/png-clipart-air-transportation-cargo-freight-transport-logistics-logistic-people-mode-of-transport.png', // replace with actual icon URL
    },
    // Add more communities here if needed
  ];


  const followers = [
    {
      id: 1,
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OznfP0wzIokRgibr92whysuVxgeCQrY-zQ&s',
      userName: 'Alice Smith',
      description: 'The trains are late by an hour'
    },
    {
      id: 2,
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Wahlberg_2021.jpg/330px-Mark_Wahlberg_2021.jpg',
      userName: 'Mahesh Dalvi',
      description: 'Free waffles today on waffle day at RangRas Cafe'
    },
    {
      id: 3,
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrycpYEE_j3OFS9hRB_I2i5hTc50qH0B4Ng&s',
      userName: 'Anjali Mehta',
      description: 'Road accidents in India claimed 415 lives, injured 1,286 people each day',
    },
    {
      id: 4,
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Wahlberg_2021.jpg/330px-Mark_Wahlberg_2021.jpg',
      userName: 'Sanjay Sargam',
      description: 'Shop Opening Ceremony at 7.00PM on 27/July/2024'
    },
    {
      id: 5,
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtodrdmecGZO5HYuyQr2Khcww9S_FONRF5A&s',
      userName: 'Khushi Sharma',
      description: 'Join me on KhushiChannel for [brief focus—e.g., `tech tips,` `delicious recipes,` `exciting travel vlogs`] and more!',
    }
  ];

  const renderCommunity = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.communityCard}>
        <Image source={{ uri: item.icon }} style={styles.communityIcon} />
        <Text style={styles.communityTitle}>{item.title}</Text>
      </View>
    </View>
  );


  const renderFollower = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.followerContainer}>
        <Image source={{ uri: item.profilePic }} style={styles.avatar} />
        <View style={styles.followerInfo}>
          <Text style={styles.followerName}>{item.userName}</Text>
          <Text style={styles.followerDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mark_Wahlberg_2021.jpg/330px-Mark_Wahlberg_2021.jpg' }} // replace with actual profile image URL
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.email}>user@example.com</Text>
            <Text style={styles.communityName}>Community</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={communities}
        renderItem={renderCommunity}
        keyExtractor={item => item.id}
        style={styles.communitiesList}
      />
      <FlatList
        data={followers}
        renderItem={renderFollower}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  communityName: {
    fontSize: 14,
    color: 'black',
  },
  communityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityIcon: {
    width: 40,
    height: 40,
  },
  communityTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  followerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  followerInfo: {
    marginLeft: 10,
    flex: 1,
  },
  followerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  followerDescription: {
    fontSize: 14,
    color: 'black',
  },
  connectButton: {
    backgroundColor: '#2089dc',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProfileScreen;