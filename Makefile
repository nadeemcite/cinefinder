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
