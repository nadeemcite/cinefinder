# Makefile

# Frontend variables
FRONTEND_DIR := frontend
FRONTEND_NODE_MODULES := $(FRONTEND_DIR)/node_modules
FRONTEND_YARN_LOCK := $(FRONTEND_DIR)/yarn.lock

.PHONY: install-frontend
install-frontend:
	@echo "Installing frontend dependencies..."
	cd $(FRONTEND_DIR) && npm install

.PHONY: run-frontend
run-frontend:
	@echo "Starting frontend..."
	cd $(FRONTEND_DIR) && npm start

.PHONY: build-frontend
build-frontend:
	@echo "Building frontend..."
	cd $(FRONTEND_DIR) && npm run build

.PHONY: test-frontend
test-frontend:
	@echo "Running frontend tests..."
	cd $(FRONTEND_DIR) && npm test


# Backend variables
BACKEND_DIR := backend
POETRY := poetry

.PHONY: install-backend
install-backend:
	@echo "Installing backend dependencies..."
	cd $(BACKEND_DIR) && $(POETRY) install

.PHONY: run-backend
run-backend:
	@echo "Running backend server..."
	cd $(BACKEND_DIR) && $(POETRY) run python manage.py runserver

.PHONY: migrate
migrate:
	@echo "Applying database migrations..."
	cd $(BACKEND_DIR) && $(POETRY) run python manage.py migrate

.PHONY: makemigrations
makemigrations:
	@echo "Making database migrations..."
	cd $(BACKEND_DIR) && $(POETRY) run python manage.py makemigrations
