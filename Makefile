install:
	sudo npm link

start:
	npx babel-node src/bin/brain-even

publish:
	npm publish --dry-run

lint:
	npx eslint src/
