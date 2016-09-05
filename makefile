all: build

clean:
	scripts/clean.sh

build: clean
	scripts/build.sh
