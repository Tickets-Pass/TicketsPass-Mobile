import { Provider} from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/Tab';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </Provider>
  );
}
