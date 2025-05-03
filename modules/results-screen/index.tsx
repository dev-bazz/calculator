import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ResultStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ResultModule = () => {
	const theme = useTheme();
	const { top } = useSafeAreaInsets();
	const { screen } = ResultStyle(theme, top);
	return (
		<View style={screen}>
			<Text>ResultModule</Text>
		</View>
	);
};

export default ResultModule;
