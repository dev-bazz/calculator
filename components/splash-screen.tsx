import { useRef, type Dispatch, type SetStateAction } from 'react';
import Rive, { Fit, type RiveRef } from 'rive-react-native';

export default function SplashScreen(prop: {
	isAnimationEnded: Dispatch<SetStateAction<boolean>>;
}) {
	const { isAnimationEnded } = prop;
	const riveRef = useRef<RiveRef>(null);

	return (
		<Rive
			ref={riveRef}
			resourceName="calc-splash"
			autoplay
			fit={Fit.Cover}
			style={{ width: '100%', height: '100%' }}
			onRiveEventReceived={(e) => {
				if (e.name === 'splash-end') {
					isAnimationEnded(true);
				}
			}}
		/>
	);
}
