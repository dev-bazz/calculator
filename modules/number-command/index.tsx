import { Pressable, Text } from 'react-native';
import { NumberStyle } from './style';
import { useTheme } from '@react-navigation/native';

const NumberComponent = ({
	numberCommand,
}: {
	numberCommand: number;
}) => {
	const theme = useTheme();
	const { button, text } = NumberStyle(theme);
	return (
		<Pressable style={button}>
			<Text style={text}>{numberCommand}</Text>
		</Pressable>
	);
};

export default NumberComponent;
