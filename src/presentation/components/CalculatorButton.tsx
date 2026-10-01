import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={pressed => ({
        ...styles.button,
        width: doubleSize ? 180 : 80,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 0,
      })}
      onPress={() => onPress()}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: blackText ? colors.background : colors.textPrimary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
