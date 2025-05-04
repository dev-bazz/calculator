import { getAppTheme, setAppTheme } from '@/constant/handleTheme';
import { Pressable } from 'react-native';
import moon from '@/assets/images/toggle/moon.svg';
import sun from '@/assets/images/toggle/sun.svg';
import { Image } from 'expo-image';
import { toggleThemeButtonStyle } from './style';

const themeAssets = {
	light: sun,
	dark: moon,
};
const ToggleComponent = () => {
	const theme = getAppTheme();
	const style = toggleThemeButtonStyle();
	return (
		<Pressable
			style={style.button}
			onPress={() => setAppTheme(theme === 'light' ? 'dark' : 'light')}>
			<Image
				style={style.image}
				source={themeAssets[theme === 'light' ? 'dark' : 'light']}
			/>
		</Pressable>
	);
};

export default ToggleComponent;
