import React, { useContext } from "react";
import * as ImagePicker from 'expo-image-picker';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import {  } from "./item-management.screen.styles";
import { ItemContext } from "../../context/item.context";
import { ItemInput, ItemButton, ImageSelector, ItemContainer } from "./item-management.screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { IsLoading } from "../../../../components/loading/loading.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginContext } from "../../../account/context/login.context";
import { ItemManagementContext } from "../../context/item-management.context";

export const ItemManagementScreen = ({ navigation }) => {
  const { items } = useContext(ItemContext);
  const { token } = useContext(LoginContext);
  const { onCreateItem } = useContext(ItemManagementContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      // this.setState({
      //   photo: result.uri
      // });
    }
  }
   
  // createItem = () => {
  //   const input = this.props.data.split("-");
  
  //   for(let i = 0; i < input.length; i++) {
  //     if(input[i] == '') {
  //       alert("None of the fields must be empty");
  //       return false;
  //     }
  //   }

  //   let filename = '';
  //   let localUri = '';
  //   let type = '';

  //   if(this.state.photo != null) {
  //     localUri = this.state.photo;
  //     filename = localUri.split('/').pop();
  //     let match = /\.(\w+)$/.exec(filename);
  //     type = match ? `image/${match[1]}` : `image`;
  //   } else {
  //     if(this.state.logo != null){
  //       localUri = url(`${this.props.folder}/logo`, this.state.logo);
  //       filename = this.state.logo;
  //       type = 'image/jpg';
  //     }else{
  //       localUri = url('logo', 'camera.png');
  //       filename = 'camera.png';
  //       type = 'image/jpg';
  //     }
  //   }

  //   const formData = new FormData();
  //   formData.append('image', { uri: localUri, name: `${filename}_${this.props.data}`, type });
    
  //   this.setState({loading: true});

  //   saveFile(this.props.router, formData, this.props.api_token, responseJson => {
  //     if(responseJson['success'] === true) {
  //       this.setState({
  //         success:'',
  //         status: '',
  //         loading: false
  //       });        
        
  //       alert("Entry saved successfully");
  //       navigator(this.props.redirect, this.props.navigation);
  //     } else {
  //       this.setState({
  //         loading: false,
  //         success: responseJson['success'],
  //         status: responseJson['data']
  //       });
  //     }
  //   }, 'multipart/form-data');
    
  //   setInterval(() => {
  //     this.setState({success: null})
  //   }, 5000)
  // };
  
  return (
    <SafeArea>
      {/* <IsLoading /> */}
      <ItemContainer>
      <Spacer size="large">
        <ItemInput
          label="Item name"
          // value={}
          // textContentType="emailAddress"
          // keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <ItemInput
          label="Item Price"
          // value={}
          // textContentType="emailAddress"
          // keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <ItemInput
          label="Item Ingredients"
          multiline={true}
          numberOfLines={5}
          style={{height: 150}}
          // value={}
          // textContentType="emailAddress"
          // keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <TouchableOpacity onPress={pickImage}>
          {/* <ImageSelector source={{ uri: `../../../../assets/images/camera.png`}}  /> */}
          <ImageSelector source={require('../../../../assets/images/camera.png')}  />
        </TouchableOpacity>
      </Spacer>
     
      <Spacer size="large">
        <ItemButton
          // icon=""
          mode="contained"
          onPress={() => onCreateItem(token, navigation)}
        >
          Create Item
        </ItemButton>
      </Spacer>
      </ItemContainer>
    </SafeArea>
  );
};