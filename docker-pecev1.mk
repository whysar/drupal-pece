.PHONY: run stop clean distro prod


run:
	docker-compose -f docker-compose-pecev1.yml run --rm -p 8080:80 dev_pece --remove-orphans

in:
	docker exec -it $(shell docker-compose ps | grep _dev_ | cut -d" " -f 1) /bin/bash

v1-stop:
	docker-compose -f docker-compose-pecev1.yml stop

v1-clean:
	docker-compose -f docker-compose-pecev1.yml down
	rm -rf ./node_modules
	rm -rf ./cnf
	rm -rf ./builds
	rm -rf ./build

distro-clean:
	docker-compos -f docker-compose-pecev1.ymle down
	rm -rf ./build

prod:
	docker-compose -f docker-compose-pecev1.yml run --rm -p 8080:80 production

distro: distro-clean
	docker-compose -f docker-compose-pecev1.yml run --rm production gulp pack-distro

run-php7:
	docker-compose -f docker-compose-php7.2.yml run --rm -p 8080:80 dev_pece
