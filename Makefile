.PHONY: help

help: ## Prints help for targets with comments
	@grep -E '^[a-zA-Z0-9.\ _-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Install 
	@npm install

update: ## Update dependencies
	@npm update

build: ## Build this ui output will be found in ./dist
	@npm run build

run: ## Start development server
	@npm run serve

docker-build-test: ## Build ui for test and put it in docker container
	@docker build --build-arg enviroment=prd -t ether_todo_webui . || echo "🔥 docker build failed"

docker-build-prd: ## Build ui for prd and put it in docker container
	@docker build --build-arg enviroment=prd -t ether_todo_webui . || echo "🔥 docker build failed"