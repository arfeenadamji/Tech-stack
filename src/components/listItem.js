import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback, LayoutAnimation, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// import * as action from '../action';

class ListItem extends Component {
    // UNSAFE_componentWillUpdate() {
    //     LayoutAnimation.spring()
    // }

    // renderDescription() {
    //     //const{library, selectedLibraryId} = this.props;
    //     const { library, expanded } = this.props;

    //     //if(library.id === selectedLibraryId){
    //     if (expanded) {
    //         return (
    //             <CardSection>
    //                 <Text style={{ flex: 1 }}>{library.description}</Text>
    //             </CardSection>
    //         );
    //     }
    // }
    render() {
        // const { id } = this.props.library;

        return (
            // <TouchableWithoutFeedback
            //     onPress={() => this.props.selectLibrary(id)}
            // >
            //     <View>s

            <CardSection>
                <Text style={styles.titleStyle}>
                    hello
                    {this.props.library.title}
                </Text>
            </CardSection>
            //         {this.renderDescription}
            //     </View>
            // </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

// const mapStateToProps = (state, ownProps) => {

//     const expanded = state.selectLibraryId === ownProps.library.id;
//     //return {    selectedLibraryId: state.selectedLibraryId};
//     return { expanded };
// }
export default ListItem;
//export default connect(mapStateToProps, action)(ListItem);