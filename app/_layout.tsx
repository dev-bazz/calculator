import Ss from '@/components/splash-screen';
import { darkTheme, lightTheme } from '@/constant/theme';
import { AppContextProvider } from '@/context';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [showRoute, setShowRoute] = useState(false);
	const [animationEnd, setAnimationEnd] = useState(false);

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		ArimoRegular: require('@/assets/fonts/static/Arimo-Regular.ttf'),
		ArimoBold: require('@/assets/fonts/static/Arimo-Bold.ttf'),
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
			value={colorScheme === 'dark' ? darkTheme : lightTheme}>
			{loaded && animationEnd ? (
				<>
					<SafeAreaProvider>
						<AppContextProvider>
							<Stack>
								<Stack.Screen
									name="(tabs)"
									options={{ headerShown: false }}
								/>
								<Stack.Screen name="+not-found" />
							</Stack>
						</AppContextProvider>
						<StatusBar style="auto" />
					</SafeAreaProvider>
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
