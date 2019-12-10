#!/usr/bin/env node

import brainCalc from '../games/brain-calc';
import { getWelcomeString, maxAttemptsNumber } from '..';

getWelcomeString();
console.log('What is the result of the expression?');
brainCalc(maxAttemptsNumber);
