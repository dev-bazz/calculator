import { normalize } from '@/constant/responsive';
import type { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
export const SpecialBtnStyle = (theme: Theme) =>
	StyleSheet.create({
		equal: {
			backgroundColor: '#FE5A2D',
			flex: 2,
			paddingInline: normalize(20),
			paddingBlock: normalize(12),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: normalize(8),
		},
		equalText: {
			color: '#fff',
		},
		textColor: {
			color: theme.colors.text,
			flex: 1,
		},
		pressableStyle: {
			paddingInline: normalize(12),
			paddingBlock: normalize(12),
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
