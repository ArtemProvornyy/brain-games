#!/usr/bin/env node

import brainProgression from '../games/brain-progression';
import { getWelcomeString, maxAttemptsNumber } from '..';

getWelcomeString();
console.log('What number is missing in the progression?');
brainProgression(maxAttemptsNumber);
