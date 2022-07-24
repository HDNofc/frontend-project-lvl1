#!/usr/bin/env node

import greetings from '../src/cli.js';
import evenGame from '../src/evenGame.js';

const username = greetings();
evenGame(3, username);
