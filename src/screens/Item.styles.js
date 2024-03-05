import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainBlockLandscape: {
        flexDirection: 'row',
    },
image: {
    width: Dimensions.get('screen').width,
    height: 400,
    paddingTop: 50,
    paddingLeft: 24,
},
imageLandscape: {
    width: Dimensions.get('screen').height/2,
    height: Dimensions.get('screen').height,
},
backButtonIcon: {
    width: 40,
    height: 40,
    transform: [{rotate: '180deg'}]
},
container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
},
containerLandscape: {
    width: Dimensions.get('screen').height/2,
},
title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,

},
author: {
    marginBottom: 4,
    fontSize: 16,
},
price: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
},
description: {
    fontSize: 16,
    lineHeight: 22
}
})