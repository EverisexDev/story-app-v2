import React, { useState } from "react";
import { Image, Text, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import StoryNavigator from "./StoryNavigator";
import ContinueScreen from "../screens/ContinueScreen";
import ReviewScreen from "../screens/ReviewScreen";

import StoryContext from "../components/story/context";

import routes from "./routes";
import colors from "../config/colors";
import VersionScreen from "../screens/VersionScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  // const [currentStory, setCurrentStory] = useState({});
  // const [currentChatIdx, setCurrentChatIdx] = useState(-1);
  // const [currentBackIdx, setCurrentBackIdx] = useState(0);
  return (
    <StoryNavigator>
      
    </StoryNavigator>

    
    );
  }