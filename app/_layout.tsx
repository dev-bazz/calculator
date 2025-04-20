import Ss from '@/components/splash-screen';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [showRoute, setShowRoute] = useState(false);
	const [animationEnd, setAnimationEnd] = useState(false);

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			console.log(' font loaded');
		}
		if (animationEnd) {
			console.log('animation ended');
		}
	}, [loaded, animationEnd]);

	return (
		<ThemeProvider
			value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			{loaded && animationEnd ? (
				<>
					<Stack>
						<Stack.Screen
							name="(tabs)"
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="+not-found" />
					</Stack>
					<StatusBar style="auto" />
				</>
			) : (
				<>
					<Ss isAnimationEnded={setAnimationEnd} />
					<StatusBar
						style="auto"
						hidden={true}
					/>
				</>
			)}
		</ThemeProvider>
	);
}
