import React, { useContext, useState } from "react";
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
  const { onCreateItem, loading } = useContext(ItemManagementContext);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [page] = useState('createItem');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  }

  let filename = '';
  let localUri = '';
  let type = '';

  if(photo != null) {
    localUri = photo;
    filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    type = match ? `image/${match[1]}` : `image`;
  } else {
    localUri = "";
    filename = 'camera.png';
    type = 'image/jpg';
  }

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <ItemContainer>
      <Spacer size="large">
        <ItemInput
          label="Item name"
          autoCapitalize="none"
          onChangeText={(name) => setName(name)}
        />
      </Spacer>

      <Spacer size="large">
        <ItemInput
          label="Item Price"
          autoCapitalize="none"
          onChangeText={(price) => setPrice(price)}
        />
      </Spacer>

      <Spacer size="large">
        <ItemInput
          label="Item Ingredients"
          multiline={true}
          numberOfLines={5}
          style={{height: 150}}
          autoCapitalize="none"
          onChangeText={(ingredients) => setIngredients(ingredients)}
        />
      </Spacer>

      <Spacer size="large">
        <TouchableOpacity onPress={pickImage}>
          {
            photo !== null
            ?
            <ImageSelector source={{ uri: photo}} />
            :
            <ImageSelector source={require('../../../../assets/images/camera.png')}  />
          }
        </TouchableOpacity>
      </Spacer>
     
      <Spacer size="large">
        <ItemButton
          mode="contained"
          onPress={() => onCreateItem(token, navigation, localUri, `${filename}_${page}-${name}-${price}-${ingredients}`, type)}
        >
          Create Item
        </ItemButton>
      </Spacer>
      </ItemContainer>
    </SafeArea>
  );
};