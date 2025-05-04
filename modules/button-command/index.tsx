import type { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import { ButtonModuleStyle } from './style';
import { useTheme } from '@react-navigation/native';

const ButtonCommandComp = ({ children }: PropsWithChildren) => {
	const theme = useTheme();
	const { button } = ButtonModuleStyle(theme);
	return <Pressable style={button}>{children}</Pressable>;
};

export default ButtonCommandComp;
