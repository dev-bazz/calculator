import { useAppContext } from '@/context';
import { Pressable, Text } from 'react-native';
import { SpecialBtnStyle } from './style';
import { useTheme } from '@react-navigation/native';

const SpecialButtonModule = (prop: {
	type: '=' | 'AC' | '.' | '<';
}) => {
	const { setResult, setPrevResult, result } = useAppContext();
	const theme = useTheme();
	const { equal, textColor, pressableStyle } = SpecialBtnStyle(theme);
	return (
		<Pressable
			style={[prop.type === '=' ? equal : pressableStyle]}
			onPress={() => {
				if (prop.type === 'AC') {
					setResult('0');
				}
				if (prop.type === '.') {
					setResult((prev) => prev + '.');
				}
				if (prop.type === '<') {
					setResult((prev) => prev.slice(0, -1));
				}
				if (prop.type === '=') {
					setPrevResult(result);
					setResult((prev) => {
						return `${eval(prev)}`;
					});
				}
			}}>
			<Text style={textColor}>{prop.type}</Text>
		</Pressable>
	);
};

export default SpecialButtonModule;
