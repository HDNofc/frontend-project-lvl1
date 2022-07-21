install: # установка зависимостей
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: # фейковая публикация
	npm publish --dry-run