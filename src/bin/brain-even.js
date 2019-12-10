#!/usr/bin/env node

import brainEven from '../games/brain-even';
import { getWelcomeString, maxAttemptsNumber } from '..';

getWelcomeString();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(maxAttemptsNumber);
