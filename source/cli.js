#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
		Usage
			$ web3ph

		We're still in development. Please wait for the next update.
	`,
	{
		importMeta: import.meta,
	},
);

render(<App/>);
