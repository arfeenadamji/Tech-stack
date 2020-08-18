import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common'

class Item extends Component {
    render() {
        return (
            <CardSection>
                <Text>jn{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

export default Item;