import React, { FC, useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

interface Props {
    placeholder: string;
    onPress: () => void;
}

const AppButton: FC<Props> = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.text}>{props.placeholder}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(81,135,200,1)',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 20,
    },
    text: {
        color: 'white',
        fontWeight: '600',
    }
})