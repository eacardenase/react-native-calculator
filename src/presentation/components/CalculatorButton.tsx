import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
}

export const CalculatorButton = ({ label, color = colors.darkGray }: Props) => {
  return (
    <Pressable
      style={pressed => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 0,
      })}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};
