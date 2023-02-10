import React from "react";
import { View, Text, Image } from "react-native";
import styles from './songCardStyles';

const songCard = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.infoContainer}>
                    <Text>{props.song.artist}</Text>
                    <Text style={styles.year}>{props.song.year}</Text>
                </View>

                <Text style={styles.album}>{props.song.album}</Text>
                {props.song.isSoldOut && (
                <View style={styles.soldOutContainer}>
                    <Text style={styles.soldOutTitle}>TÜKENDİ</Text>
                </View>
                )}
            </View>
        </View>
    )
}

export default songCard;