import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    headerText: {
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 24,
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
    }
})