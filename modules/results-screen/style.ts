import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const ResultStyle = (theme: Theme) => {
	return StyleSheet.create({
		screen: {
			flex: 1,
			paddingInline: normalize(20),
		},
	});
};
