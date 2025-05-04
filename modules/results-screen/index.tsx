import { View, Text, useWindowDimensions } from 'react-native';
import React, { useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { ResultStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppContext } from '@/context';

const ResultModule = () => {
	const theme = useTheme();
	const { top } = useSafeAreaInsets();
	const { result, prevResult } = useAppContext();
	const numberFormat = new Intl.NumberFormat('en-Us', {});
	const { width } = useWindowDimensions();

	const scaleFontSize = useCallback(
		(fontSize: number, textLength: number) => {
			const screenWidth = width;
			return Math.min(fontSize, screenWidth / textLength);
		},
		[width],
	);
	const { screen, displayText, prevText } = ResultStyle(
		theme,
		top,
		scaleFontSize(32, result.length),
		scaleFontSize(14, prevResult.length),
	);

	return (
		<View style={screen}>
			<Text style={prevText}>{prevResult}</Text>
			<Text style={displayText}>{result}</Text>
		</View>
	);
};

export default ResultModule;
