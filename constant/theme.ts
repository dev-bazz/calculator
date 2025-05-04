import type { Theme } from '@react-navigation/native';
import { themeColors } from '.';

export interface CustomTheme extends Theme {
	appColors?: {
		bg: string;
	};
}

export const lightTheme: CustomTheme = {
	dark: false,
	colors: {
		primary: themeColors.light.text,
		background: themeColors.light.background,
		card: themeColors.light.card,
		text: themeColors.light.text,
		border: '#ccc',
		notification: '#fff',
	},
	fonts: {
		regular: {
			fontFamily: 'System',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'System',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'System',
			fontWeight: 'bold',
		},
		heavy: {
			fontFamily: 'System',
			fontWeight: 'bold',
		},
	},
	appColors: {
		bg: 'pink',
	},
};

export const darkTheme: CustomTheme = {
	dark: true,
	colors: {
		primary: themeColors.dark.text,
		background: themeColors.dark.background,
		card: themeColors.dark.card,
		text: themeColors.dark.text,
		border: '#ccc',
		notification: '#fff',
	},
	fonts: {
		regular: {
			fontFamily: 'ArimoRegular',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'System',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'ArimoBold',
			fontWeight: 'bold',
		},
		heavy: {
			fontFamily: 'System',
			fontWeight: 'bold',
		},
	},
	appColors: {
		bg: 'pink',
	},
};
