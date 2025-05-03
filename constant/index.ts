interface ThemeConst {
	background: string;
	textPad: string;
	text: string;
	card: string;
}
export const themeColors: Record<'light' | 'dark', ThemeConst> = {
	light: {
		background: '#ffffff',
		textPad: '#F5F5F5',
		text: '#1E1E1E',
		card: '#f5f5f5',
	},
	dark: {
		background: '#212327',
		textPad: '#27292E',
		text: '#FFFFFF',
		card: '#27292E',
	},
};
