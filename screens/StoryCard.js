import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/story_image_2.png")}
              style={styles.storyImage}></Image>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.author}
              </Text>
              <Text style={styles.storyDescText}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  likeButton: {
    
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width : RFValue(160),
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  storyTitleText: {
    fontSize: RFValue(20),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  storyDescText: {
    fontSize: RFValue(12),
    fontFamily: 'Bubblegum-Sans',
    paddingTop: RFValue(10),
    color: 'white',
  },
  storyAuthorText: {
    fontSize: RFValue(15),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
  },
  storyImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '95%',
    height: RFValue(250),
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
