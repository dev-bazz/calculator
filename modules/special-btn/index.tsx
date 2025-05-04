import { useAppContext } from '@/context';
import { Pressable, Text } from 'react-native';
import { SpecialBtnStyle } from './style';
import { useTheme } from '@react-navigation/native';
import { commandIcon } from '@/constant/icons';
import { Image } from 'expo-image';
import { getAppTheme } from '@/constant/handleTheme';
import { normalize } from '@/constant/responsive';

const calculator = (value: string) => {
	try {
		return `${eval(value)}`;
	} catch (error) {
		return value;
	}
};
const SpecialButtonModule = (prop: {
	type: '=' | 'AC' | '.' | '<';
}) => {
	const { setResult, setPrevResult, result } = useAppContext();
	const theme = useTheme();
	const { equal, textColor, pressableStyle, equalText } =
		SpecialBtnStyle(theme);

	commandIcon;
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
					if (result === '0' || result.length === 1) {
						return setResult('0');
					}
					setResult((prev) => prev.slice(0, -1));
				}
				if (prop.type === '=') {
					setPrevResult(result);
					setResult((prev) => {
						return calculator(prev);
					});
				}
			}}>
			{prop.type === '<' ? (
				<Image
					style={{ width: normalize(14), height: normalize(14) }}
					source={commandIcon[getAppTheme()].backArrow}
				/>
			) : (
				<Text style={prop.type === '=' ? equalText : textColor}>
					{prop.type}
				</Text>
			)}
		</Pressable>
	);
};

export default SpecialButtonModule;
