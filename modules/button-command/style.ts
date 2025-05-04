import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const ButtonModuleStyle = (theme: Theme) =>
	StyleSheet.create({
		button: {
			backgroundColor: theme.dark ? '#70707053' : '#8b8b8b26',
			borderRadius: normalize(100),
			padding: normalize(16),
			aspectRatio: 1,
			flex: 1,
			justifyContent: 'center', // Center the text vertically in the button
			alignItems: 'center', // Center the text horizontally in the button
		},
	});
