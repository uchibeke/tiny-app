NAME ?= uchibeke/tiny-app
TAG ?= $(shell git rev-parse HEAD)
IMG ?= ${NAME}:${TAG}
LATEST ?= ${NAME}:latest

build:
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${LATEST}

push:
	@docker push ${NAME}

login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}

run-local:
	npm i && npm run dev

run-production:
	docker-compose up --build