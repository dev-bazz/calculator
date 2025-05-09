import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const textPadStyle = (theme: Theme) =>
	StyleSheet.create({
		section: {
			flex: 2,
			paddingInline: normalize(40),
			backgroundColor: theme.colors.card,

			borderTopRightRadius: normalize(20),
			borderTopLeftRadius: normalize(20),
		},
		text: {},
	});
