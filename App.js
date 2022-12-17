import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
      <NavigationContainer>
        <PaperProvider theme={theme}>
        <Provider store={store}>
          <Drawer/>
        </Provider>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
