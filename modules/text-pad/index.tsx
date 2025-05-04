import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { textPadStyle } from './style';
import ToggleComponent from '../theme-toggle';

const TextPad = () => {
	const theme = useTheme();
	const { section, text } = textPadStyle(theme);
	return (
		<View style={section}>
			<View style={{ flexDirection: 'row' }}>
				<ToggleComponent />
			</View>
		</View>
	);
};

export default TextPad;
