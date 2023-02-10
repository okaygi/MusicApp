import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    innerContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    artist: {},
    album: {
        marginTop: 5,
        marginBottom: 5,
        color: 'gray',
    },
    year: {
        marginLeft: 10,
        color: 'gray', 
        fontSize: 12,
    },
    soldOutContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row-reverse',
        marginRight: 175,
    },
    soldOutTitle: {
        color: 'red',
    },
})