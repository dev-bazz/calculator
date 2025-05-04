import { normalize } from '@/constant/responsive';
import { StyleSheet } from 'react-native';
export const toggleThemeButtonStyle = () =>
	StyleSheet.create({
		image: {
			width: normalize(18),
			height: normalize(18),
		},
		button: {
			padding: normalize(12),
			borderWidth: 2,
			borderColor: '#8b8b8b3a',
			borderRadius: 50,
		},
	});
