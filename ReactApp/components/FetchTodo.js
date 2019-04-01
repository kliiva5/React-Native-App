import React from 'react';
import { Button } from 'react-native';

const fetchTodos = props => {
    return (
        <Button title="Get my todos" onPress={props.getTodos} />
    );
}

export default fetchTodos;