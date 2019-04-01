import React from 'react';
import { Button, TextInput, View } from 'react-native';

const NewTodo = props => {
    return (
        <View style={props.isVisible}>
            <TextInput 
                placeholder={"Enter a description"}
                style={{ margin: 10, width: 200, borderColor: 'black', borderWidth: 1}}
                onChangeText={props.handleDescriptionChange}
                value={props.description}
            />
            <Button title="Add my new todo" onPress={props.handleNewTodoCreation} />
        </View>
    );
}

export default NewTodo;