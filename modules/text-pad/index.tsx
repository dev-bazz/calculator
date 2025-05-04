import { useTheme } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { textPadStyle } from './style';
import ToggleComponent from '../theme-toggle';
import ButtonCommandComp from '../button-command';
import { Image } from 'expo-image';

import { getAppTheme } from '@/constant/handleTheme';
import { commandIcon } from '@/constant/icons';
import { normalize } from '@/constant/responsive';
import NumberComponent from '../number-command';
import SpecialButtonModule from '../special-btn';

const TextPad = () => {
	const theme = useTheme();
	const { section, text } = textPadStyle(theme);
	const icons = commandIcon[getAppTheme()];
	const sizeIcon = normalize(16);
	const commands: {
		type: 'number' | 'command' | 'none' | 'special';
		iconName: string;
		command?: '+' | '-' | '*' | '/' | '%';
		number?: number;
		special?: '=' | 'AC' | '.';
	}[] = [
		{ type: 'none', iconName: '' },
		{ type: 'command', iconName: 'divide', command: '/' },
		{ type: 'command', iconName: '', command: '%' },
		{ type: 'command', iconName: 'divide', command: '*' },
		{ type: 'number', number: 7, iconName: 'number 7' },
		{ type: 'number', number: 8, iconName: 'number 7' },
		{ type: 'number', number: 9, iconName: 'number 7' },
		{ type: 'command', iconName: 'number 7', command: '-' },
		{ type: 'number', number: 4, iconName: 'number 7' },
		{ type: 'number', number: 5, iconName: 'number 7' },
		{ type: 'number', number: 6, iconName: 'number 7' },
		{ type: 'command', iconName: 'number 7', command: '+' },
		{ type: 'number', number: 1, iconName: 'number 7' },
		{ type: 'number', number: 2, iconName: 'number 7' },
		{ type: 'number', number: 3, iconName: 'number 7' },
		{ type: 'number', number: 0, iconName: 'number 7' },
		{ type: 'special', iconName: 'number 7', special: 'AC' },
		{ type: 'special', iconName: 'number 7', special: '=' },
		{ type: 'special', iconName: 'number 7', special: '.' },
	];
	return (
		<View style={section}>
			<FlatList
				refreshing={false}
				numColumns={4}
				keyExtractor={(item) =>
					`${item.type}-${item.iconName}-${item.command}-${item.number}`
				}
				columnWrapperStyle={{
					justifyContent: 'space-between',
					gap: normalize(10),
					alignItems: 'flex-start',
				}}
				data={commands}
				style={{ paddingTop: normalize(48) }}
				ItemSeparatorComponent={() => (
					<View style={{ height: normalize(24) }} />
				)}
				renderItem={(data) => {
					if (data.item.type === 'none') return <ToggleComponent />;
					if (data.item.type === 'special' && data.item.special) {
						return <SpecialButtonModule type={data.item.special} />;
					}
					if (
						(data.item.type === 'number' && data.item.number) ||
						data.item.number === 0
					) {
						return <NumberComponent numberCommand={data.item.number} />;
					}
					if (data.item.type === 'command' && data.item.command) {
						return (
							<ButtonCommandComp>
								<Image
									source={
										icons[
											data.item.command === '*'
												? 'multiply'
												: data.item.command === '+'
												? 'add'
												: data.item.command === '/'
												? 'divide'
												: data.item.command === '%'
												? 'module'
												: 'minus'
										]
									}
									style={{
										width: sizeIcon,
										height:
											data.item.command === '-' ? sizeIcon - 16 : sizeIcon,
									}}
								/>
							</ButtonCommandComp>
						);
					}
					return <Text>Test</Text>;
				}}
			/>
		</View>
	);
};

export default TextPad;
