import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const NumberStyle = (theme: Theme) =>
	StyleSheet.create({
		button: {
			borderRadius: normalize(100),
			padding: normalize(16),

			flex: 1,
			justifyContent: 'center', // Center the text vertically in the button
			alignItems: 'center', // Center the text horizontally in the button
		},
		text: {
			color: theme.colors.text,
			fontSize: normalize(18),
		},
	});
