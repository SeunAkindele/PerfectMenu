import React from 'react';
import { Searchbar } from 'react-native-paper';
import {StatusBar, View, Text, SafeAreaView} from 'react-native';

import { MenuInfo } from '../components/menu-info.component';

export const Menu = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{padding: 16}}>
          <Searchbar />
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: 'blue'}}>
          <MenuInfo />
        </View>
      </SafeAreaView>
    </>
  )
};