import { View, Text, Pressable } from 'react-native';
import { styles } from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </Pressable>
      </View>
    </View>
  );
};
