#!/usr/bin/env node

import brainPrime from '../games/brain-prime';
import { getWelcomeString, maxAttemptsNumber } from '..';

getWelcomeString();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainPrime(maxAttemptsNumber);
