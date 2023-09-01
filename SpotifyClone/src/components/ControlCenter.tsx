import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../../musicPlayerServices';

const ControlCenter = () => {
  const playBackState = usePlaybackState();
  // Skip to Next Song
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  // Skip to Previous Song
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const curreentTrack = await TrackPlayer.getCurrentTrack();
    if (curreentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
