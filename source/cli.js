#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import open from 'open';
import App from './app.js';

const cli = meow(
	`
		Usage
			$ web3ph
			$ web3ph explore <address> --eth
			$ web3ph explore <address> --matic

		We're still in development. Please wait for the next update.
	`,
	{
		importMeta: import.meta,
		flags: {
			ethereum: {
				type: 'boolean',
				alias: 'eth',
				default: false
			},
			polygon: {
				type: 'boolean',
				alias: 'matic',
				default: false
			},
		},
	},
);

render(<App/>);

if (cli.input[0] === 'explore' && cli.input[1] && cli.flags.ethereum) {
    open(`https://etherscan.io/address/${cli.input[1]}`);
} else if (cli.input[0] === 'explore' && cli.input[1] && cli.flags.polygon) {
	open(`https://polygonscan.com/address/${cli.input[1]}`);
} else {
    console.error('Invalid command or address');
}
