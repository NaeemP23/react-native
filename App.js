import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Camera_Hook from './Camera_Hook';

export default function App() {
  return (
    <View style={{
      flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
    }}>
      <Camera_Hook />
    </View>
  );
}
