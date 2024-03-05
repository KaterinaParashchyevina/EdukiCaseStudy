import { Pressable, Text, Image } from "react-native";
import {styles} from './ItemCard.styles'
import { useNavigation } from '@react-navigation/native';

export const ItemCard = (props) => {
    const { data } = props;

    const navigation = useNavigation() 
    const { title, price, firstPreviewImage, author } = data;
    

    const handlePress = () => {
        navigation.push('Item', {data})
    }
    
     return (
        <Pressable style={styles.card} onPress={handlePress}>
            <Image source={{uri: firstPreviewImage.watermarked}} 
                style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author.details.publicName}</Text>
            <Text style={styles.price}>{`${price} €`}</Text>
        </Pressable>
    )
}