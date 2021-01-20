install:
	npm install

link:
	npm link

start:
	src/bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
