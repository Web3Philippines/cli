import React from 'react';
import {Text} from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

export default function App() {
	return (
		<>
			<Gradient name="mind">
				<BigText text="web3ph cli" font="chrome" />
			</Gradient>
			<Text color="blue">✨ Kumusta from Philippines!✨</Text>
		</>
	);
}
