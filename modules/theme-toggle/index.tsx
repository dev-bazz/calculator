import { getAppTheme, setAppTheme } from '@/constant/handleTheme';
import { Pressable, Text } from 'react-native';

const ToggleComponent = () => {
	const theme = getAppTheme();
	return (
		<Pressable
			onPress={() => setAppTheme(theme === 'light' ? 'dark' : 'light')}>
			<Text>{theme}</Text>
		</Pressable>
	);
};

export default ToggleComponent;
