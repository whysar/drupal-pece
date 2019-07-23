include docker.mk
include docker-pecev1.mk
.PHONY: test

DRUPAL_VER ?= 7
PHP_VER ?= 7.2

test:
	cd ./tests/$(DRUPAL_VER) && PHP_VER=$(PHP_VER) ./run.sh
