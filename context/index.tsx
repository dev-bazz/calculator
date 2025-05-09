import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
} from 'react';
import { calculateExpression } from './parse';

interface Props {
	result: string;
	prevResult: string;
	setResult: Dispatch<SetStateAction<string>>;
	setPrevResult: Dispatch<SetStateAction<string>>;
}
const AppContext = createContext<Props | null>(null);

export function AppContextProvider({ children }: PropsWithChildren) {
	const [result, setResult] = useState(
		`${calculateExpression('0')}`,
	);
	const [prevResult, setPrevResult] = useState('');
	return (
		<AppContext.Provider
			value={{ result, setResult, prevResult, setPrevResult }}>
			{children}
		</AppContext.Provider>
	);
}

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error(
			'useAppContext must be used within a AppContextProvider',
		);
	}
	return context;
};
