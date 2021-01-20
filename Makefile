install:
	npm install

link:
	npm link

start:
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
