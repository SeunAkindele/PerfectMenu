import React, {useState, useContext} from "react";
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, Alert, TouchableOpacity } from "react-native";
import { OrderButton, DisableButton, Trash, Progress, RatesProgress, ItemInput, ImageSelector } from "./item-detail-screen.styles";
import { ItemInfoCard } from "../../components/item-info-card/item-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { ItemContext } from "../../context/item.context";
import { strlen, ucFirst } from "../../../../components/utility/functions";
import { Text } from "../../../../components/typography/text.component";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";

export const ItemDetailScreen = ({ route }) => {
  
  const { item } = route.params;

  const [itemName, setItemName] = useState(item.name);
  const [itemPrice, setItemPrice] = useState(item.price);
  const [itemIngredients, setItemIngredients] = useState("");
  const [vatStatus, setVatStatus] = useState(item.vat_status);
  const [photo, setPhoto] = useState( `http://localhost/PerfectMenuApi/vendor/images/${item.image}`);

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
    filename = item.image;
    type = 'image/jpg';
  }

  const vat = [
    {label: 'Enable', value: 1},
    {label: 'Disable', value: 0}
  ];

  return (
    <>
      <ItemInfoCard item={item} />
      <ScrollView>
      
       
       
        <Spacer position="right" size="large" />
         <Spacer position="left" size="large">
         
          <Spacer position="top" size="large" />
          <Text variant="caption">Ratings for {ucFirst(item.name)}</Text>
          <Spacer position="top" size="medium" />
          <RatesProgress>
            <Text variant="label">1</Text>
            <Progress progress={item.ratings.one} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">2</Text>
            <Progress progress={item.ratings.two} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">3</Text>
            <Progress progress={item.ratings.three} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">4</Text>
            <Progress progress={item.ratings.four} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">5</Text>
            <Progress progress={item.ratings.five} />
          </RatesProgress>
          
          <Spacer position="bottom" size="large" />
        </Spacer>
       
        {
          
          item.ingredients && strlen(item.ingredients) > 0
          ?
          <>
          <Spacer position="left" size="large">
          <Text>Ingredients</Text>
          <Spacer position="bottom" size="large" />
        </Spacer>

        {  item.ingredients.map((itm) => 
          <Spacer position="left" size="large">
            <RatesProgress>
              <Text variant="label">{ucFirst(itm.name)}</Text>
              <Trash onPress={() => {
            Alert.alert(
              "Delete Ingredient",
              "Are you sure?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () => null}
              ],
              { cancelable: false }
            );
          }} name="closecircle" />
            </RatesProgress>
          </Spacer>
          )}
          </>
          :
          <Spacer position="left" size="large">
            <Spacer position="top" size="small" />
            <Text>No ingredients</Text>
          </Spacer>
        }
        <Spacer position="top" size="large" />
        <Spacer position="left" size="large">
            <ItemInput
              placeholder={itemName}
              autoCapitalize="none"
              onChangeText={(name) => setItemName(name)}
            />
          </Spacer>
          <Spacer position="bottom" size="large" />
          <Spacer position="left" size="large">
            <ItemInput
              placeholder={itemPrice}
              autoCapitalize="none"
              onChangeText={(price) => setItemPrice(price)}
            />
          </Spacer>
          <Spacer position="bottom" size="large" />
          <Spacer position="left" size="large">
              <ItemInput
                placeholder="Add Ingredients"
                multiline={true}
                numberOfLines={5}
                style={{height: 150}}
                autoCapitalize="none"
                onChangeText={(ingredients) => setItemIngredients(ingredients)}
              />
            </Spacer>
            <Spacer position="bottom" size="large" />
            <Spacer size="large" position="top">
              <TouchableOpacity onPress={pickImage}>
                {
                  photo !== null
                  ?
                  <ImageSelector source={{ uri: photo}} />
                  :
                  <ImageSelector source={require('../../../../assets/images/camera.png')}  />
                }
              </TouchableOpacity>
              <Spacer position="bottom" size="large" />
              <Text style={{alignSelf: 'center'}} variant="caption">Click image to update picture</Text>
            </Spacer>
            <Spacer position="bottom" size="large" />
            <Spacer size="large" position="left">
              <Dropdown
                data={vat} onValueChange={ item => setVatStatus(item)} placeholder={item.vat_status == 1 ? 'Vat Enabled' : 'Vat Disabled'}
              />
            </Spacer>
            <Spacer position="bottom" size="large" />
        <Spacer position="top" size="large" />
          <Spacer position="bottom" size="large">
          <OrderButton mode="contained">EDIT ITEM</OrderButton>
        </Spacer>
        <Spacer position="bottom" size="large" />
      <Spacer position="bottom" size="large">
        <DisableButton mode="contained">DISABLE ITEM</DisableButton>
      </Spacer>
      </ScrollView>

     
      
    </>
  )
}