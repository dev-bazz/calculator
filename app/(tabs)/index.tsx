import ResultModule from '@/modules/results-screen';
import TextPad from '@/modules/text-pad';
import { useTheme, type Theme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

export default function Index() {
	const themeColor = useTheme();

	const style = mainStyle(themeColor);
	return (
		<View
			style={{
				flex: 1,
			}}>
			<ResultModule />
			<TextPad />
		</View>
	);
}

function mainStyle(theme: Theme) {
	const { colors } = theme;
	return StyleSheet.create({
		text: {
			color: colors.text,
		},
		result: {
			flex: 1,
		},
	});
}
