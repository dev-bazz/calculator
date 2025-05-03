import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { ResultStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ResultModule = () => {
	const theme = useTheme();
	const { top } = useSafeAreaInsets();
	const { screen, displayText } = ResultStyle(theme, top);
	const [result, setResult] = useState(0);
	return (
		<View style={screen}>
			<Text style={displayText}>{result}</Text>
		</View>
	);
};

export default ResultModule;
