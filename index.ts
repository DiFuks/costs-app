import { AppRegistry } from 'react-native';

import { App } from '@app/App';
import { name as appName } from '@root/app.json';

AppRegistry.registerComponent(appName, () => App);
