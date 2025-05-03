import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ResultStyle } from './style';

const ResultModule = () => {
	const theme = useTheme();
	const { screen } = ResultStyle(theme);
	return (
		<View style={screen}>
			<Text>ResultModule</Text>
		</View>
	);
};

export default ResultModule;
