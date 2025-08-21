.PHONY: build run dev stop clean install dev-build dev-shell

# Docker image names and container names
DEV_IMAGE_NAME = react-typescript-image
DEV_CONTAINER_NAME = react-typescript-container

# Get the current directory in Windows-friendly format
ifeq ($(OS),Windows_NT)
	CURRENT_DIR = ${CURDIR}
	CURRENT_DIR_UNIX = $(subst \,/,$(CURRENT_DIR))
	VOLUME_MOUNT = $(CURRENT_DIR_UNIX):/app
else
	CURRENT_DIR = $(shell pwd)
	VOLUME_MOUNT = $(CURRENT_DIR):/app
endif

# Development container configuration
DEV_DOCKER_RUN = docker run -it --rm \
	-v $(VOLUME_MOUNT) \
	-v react-typescript-image-node-modules:/app/node_modules \
	-p 5173:5173 \
	-e CHOKIDAR_USEPOLLING=true \
	-e HOST=0.0.0.0 \
	--name $(DEV_CONTAINER_NAME)

# Build development image
dev-build:
	docker build -f Dockerfile.dev -t $(DEV_IMAGE_NAME) .

# Start development container
dev:
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME)

# Install dependencies in container
install:
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME) npm install

# Add a new dependency
add:
	@read -p "Enter package name: " package; \
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME) npm install $$package

# Add a dev dependency
add-dev:
	@read -p "Enter package name: " package; \
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME) npm install -D $$package

# Remove a dependency
remove:
	@read -p "Enter package name: " package; \
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME) npm uninstall $$package

# Open shell in development container
dev-shell:
	$(DEV_DOCKER_RUN) $(DEV_IMAGE_NAME) sh

# Stop development container
stop:
	docker stop $(DEV_CONTAINER_NAME) || true

# Clean up
clean:
	docker rm -f $(DEV_CONTAINER_NAME) || true
	docker rmi $(DEV_IMAGE_NAME) || true
	docker volume rm react-typescript-image-node-modules || true

# Display all available commands
help:
	@echo "Available commands:"
	@echo "  make dev-build    - Build development Docker image"
	@echo "  make dev          - Start development container"
	@echo "  make install      - Install dependencies from package.json"
	@echo "  make add          - Add a new dependency"
	@echo "  make add-dev      - Add a new dev dependency"
	@echo "  make remove       - Remove a dependency"
	@echo "  make dev-shell    - Open shell in development container"
	@echo "  make stop         - Stop development container"
	@echo "  make clean        - Remove container, image, and node_modules volume"