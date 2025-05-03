import { Appearance } from 'react-native';
export const getAppTheme = (): 'light' | 'dark' => {
	return Appearance.getColorScheme() === 'light' ? 'light' : 'dark';
};
export const setAppTheme = (theme: 'light' | 'dark') => {
	Appearance.setColorScheme(theme);
};
