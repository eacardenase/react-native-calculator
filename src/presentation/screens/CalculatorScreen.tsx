import { View, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="÷"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('Hello')} label="7" />
        <CalculatorButton onPress={() => console.log('Hello')} label="8" />
        <CalculatorButton onPress={() => console.log('Hello')} label="9" />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('Hello')} label="4" />
        <CalculatorButton onPress={() => console.log('Hello')} label="5" />
        <CalculatorButton onPress={() => console.log('Hello')} label="6" />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('Hello')} label="1" />
        <CalculatorButton onPress={() => console.log('Hello')} label="2" />
        <CalculatorButton onPress={() => console.log('Hello')} label="3" />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => console.log('Hello')} label="." />
        <CalculatorButton
          onPress={() => console.log('Hello')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
