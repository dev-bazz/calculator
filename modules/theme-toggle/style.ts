import { normalize } from '@/constant/responsive';
import { StyleSheet } from 'react-native';
export const toggleThemeButtonStyle = () =>
	StyleSheet.create({
		image: {
			width: normalize(16),
			height: normalize(16),
		},
		button: {
			padding: normalize(16),
			borderWidth: 2,
			borderColor: '#8b8b8b1f',
			borderRadius: 90,
			justifyContent: 'center',
			alignItems: 'center',
			aspectRatio: 1,
		},
	});
