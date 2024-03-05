import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
card: {
    marginBottom: 16,
},
image: {
    width: Dimensions.get('screen').width - 48,
    height: 200,
    marginBottom: 8
},
title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
},
author: {
    marginBottom: 4
},
price: {
    fontWeight: 'bold',
    fontSize: 24
}
})