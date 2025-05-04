import type { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import { ButtonModuleStyle } from './style';
import { useTheme } from '@react-navigation/native';
import { useAppContext } from '@/context';

interface Props extends PropsWithChildren {
	command?: '+' | '-' | '*' | '/' | '%';
}
const ButtonCommandComp = ({ children, command }: Props) => {
	const theme = useTheme();
	const { button } = ButtonModuleStyle(theme);
	const { setResult } = useAppContext();
	return (
		<Pressable
			onPress={() => {
				if (command) {
					setResult((prev) => prev + command);
				}
			}}
			style={button}>
			{children}
		</Pressable>
	);
};

export default ButtonCommandComp;
