import { StatusBar, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens';

function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <CalculatorScreen />
    </View>
  );
}

export default App;
