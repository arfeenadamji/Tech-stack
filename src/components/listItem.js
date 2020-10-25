import React, { Component } from 'react';
import { Text, NativeModules, StyleSheet, View, TouchableWithoutFeedback, LayoutAnimation, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    UNSAFE_componentWillUpdate() {
        const { UIManager } = NativeModules;
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        //const{library, selectedLibraryId} = this.props;
        const { library, expanded } = this.props;

        //if(library.id === selectedLibraryId){
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>

                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;
    //return {    selectedLibraryId: state.selectedLibraryId};
    return { expanded };
}
export default connect(mapStateToProps, actions)(ListItem);
