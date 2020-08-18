import React, { Component } from 'react';
import { FlatList} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';
import Item from './Item';

class LibraryList extends Component {
    renderItem(library) {
        return (
            // <ListItem library={library} />
            <Item  library = {library}/> 
        );
    };
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={library => library.id.toString()}
            />
        );
    }
};  

const mapStatetoProps = state => {
    return {
        libraries: state.libraries
    };  
}

export default connect(mapStatetoProps)(LibraryList);


