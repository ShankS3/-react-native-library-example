import {NativeModules} from 'react-native';
import getValue from './getValue';

const bridge = NativeModules.RNLibraryExample;

export default {
    getValue: () => getValue(bridge)
};
