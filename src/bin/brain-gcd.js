#!/usr/bin/env node

import brainGCD from '../games/brain-gcd';
import { getWelcomeString, maxAttemptsNumber } from '..';

getWelcomeString();
console.log('Find the greatest common divisor of given numbers.');
brainGCD(maxAttemptsNumber);
