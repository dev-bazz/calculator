interface Token {
	type: 'number' | 'operator';
	value: string;
}

function tokenize(expression: string): Token[] {
	const tokens: Token[] = [];
	let current = '';

	for (const char of expression.replace(/\s+/g, '')) {
		if ('0123456789.'.includes(char)) {
			current += char;
		} else if ('+-*/'.includes(char)) {
			if (current) {
				tokens.push({ type: 'number', value: current });
				current = '';
			}
			tokens.push({ type: 'operator', value: char });
		}
	}

	if (current) {
		tokens.push({ type: 'number', value: current });
	}

	return tokens;
}

export function calculateExpression(expression: string): number {
	const tokens = tokenize(expression);

	// First handle multiplication and division
	for (let i = 0; i < tokens.length; i++) {
		if (
			tokens[i].type === 'operator' &&
			(tokens[i].value === '*' || tokens[i].value === '/')
		) {
			const num1 = Number.parseFloat(tokens[i - 1].value);
			const num2 = Number.parseFloat(tokens[i + 1].value);
			const result = tokens[i].value === '*' ? num1 * num2 : num1 / num2;

			tokens.splice(i - 1, 3, {
				type: 'number',
				value: result.toString(),
			});
			i -= 1;
		}
	}

	// Then handle addition and subtraction
	let result = Number.parseFloat(tokens[0].value);
	for (let i = 1; i < tokens.length; i += 2) {
		const operator = tokens[i].value;
		const num = Number.parseFloat(tokens[i + 1].value);

		if (operator === '+') {
			result += num;
		} else if (operator === '-') {
			result -= num;
		}
	}

	return result;
}
