import { Pressable, Text } from 'react-native';
import { NumberStyle } from './style';
import { useTheme } from '@react-navigation/native';
import { useAppContext } from '@/context';

const NumberComponent = ({
	numberCommand,
}: {
	numberCommand: number;
}) => {
	const theme = useTheme();
	const { button, text } = NumberStyle(theme);
	const { setResult } = useAppContext();
	return (
		<Pressable
			onPress={() =>
				setResult((prev) => {
					if (prev === '0') {
						return `${numberCommand}`;
					}
					return prev + `${numberCommand}`;
				})
			}
			style={button}>
			<Text style={text}>{numberCommand}</Text>
		</Pressable>
	);
};

export default NumberComponent;
