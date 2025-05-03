import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { textPadStyle } from './style';

const TextPad = () => {
	const theme = useTheme();
	const { section, text } = textPadStyle(theme);
	return (
		<View style={section}>
			<Text style={text}>KEYBOAR</Text>
		</View>
	);
};

export default TextPad;
