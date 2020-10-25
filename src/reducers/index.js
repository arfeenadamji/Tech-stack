import { combineReducers } from 'redux';
import libraryReducers from './libraryReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: libraryReducers,
    selectedLibraryId: SelectionReducer
});