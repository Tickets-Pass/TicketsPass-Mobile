import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import "./src/i18n";
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple',
  },
}

export default function App() {

  return (
    <SafeAreaView style={{flex:1}}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <PaperProvider theme={theme}>
          <Provider store={store}>
            <Drawer/>
          </Provider>
          </PaperProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
