import { Pressable, Text } from 'react-native';

const SpecialButtonModule = (prop: { type: '=' | 'AC' | '.' }) => {
	return (
		<Pressable>
			<Text>{prop.type}</Text>
		</Pressable>
	);
};

export default SpecialButtonModule;
