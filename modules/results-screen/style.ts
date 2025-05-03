import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const ResultStyle = (theme: Theme, paddingTop: number) => {
	return StyleSheet.create({
		screen: {
			flex: 1,
			paddingInline: normalize(20),
			paddingTop,
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
			paddingBottom: normalize(20),
		},
	});
};
