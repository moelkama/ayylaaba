commit ?= "$(date +'%Y-%m-%d %H:%M')"

all: up

up:
	docker-compose up --build

down:
	docker-compose down

stop:
	docker-compose stop

start:
	docker-compose start

clean: down

git:
	git add .
	git commit -m $(commit)
	git push

.PHONY: all down stop start clean