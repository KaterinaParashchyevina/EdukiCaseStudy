import React, { useEffect, useState } from 'react';
import {View, Image, Text, ImageBackground, Pressable, Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './Item.styles'


export const Item = ({navigation, route}) => {
    const {data} = route.params;
    const { title, price, firstPreviewImage, author, description } = data;
    const [ isPortrait, setIsPortrait]= useState(Dimensions.get('window').height > Dimensions.get('window').width);
    const goBack = () => {
        navigation.goBack()
    }

    useEffect(()=>{
        Dimensions.addEventListener('change', (e) => {
            const { width, height } = e.window;
            setIsPortrait(height > width);
            console.log({width, height});
          })
    },[])

    return(
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={[!isPortrait && styles.mainBlockLandscape]}>
            <ImageBackground source={{uri: firstPreviewImage.watermarked}} 
                style={[styles.image, !isPortrait && styles.imageLandscape]}
               >
                <Pressable onPress={goBack}>
                    <Image source={require('../assets/images/arrow.png')}
                        style={styles.backButtonIcon}/>
                </Pressable>
            </ImageBackground>
            <View style={[styles.container, !isPortrait && styles.containerLandscape]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author.details.publicName}</Text>
                <Text style={styles.price}>{`${price} €`}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    )
}