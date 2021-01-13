import React, { FC, useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

interface Props {
    icon: HTMLImageElement;
    placeholder: string;
    iconSize?: number;
    value?: string;
    placeholderSize?: number;
    onChangeText?: (text: string) => void;
}

const Input: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={[styles.image, { width: props.iconSize, height: props.iconSize }]} source={props.icon} />
            </View>
            <TextInput value={props.value} style={[styles.placeholder, { fontSize: props.placeholderSize }]} placeholder={props.placeholder} onChangeText={props.onChangeText} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.3,
    },
    image: {
        marginVertical: 10,
        marginHorizontal: 16,
    },
    placeholder: {
        letterSpacing: 2,
        width: '100%',
    }
})