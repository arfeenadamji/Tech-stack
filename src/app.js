import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common'
import LibraryList from './components/libraryList';

//const store = createStore(reducers);

const Aapp = () => {
    return (
//        <Provider store={store}>
         <Provider store={createStore(reducers)}> 
            <View
             //style={{ flex: 1 }}
             >
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>

        
    );
};
export default Aapp;  