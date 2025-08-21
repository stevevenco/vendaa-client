# React TypeScript Project

A React application built with TypeScript, Vite, and TailwindCSS, using Docker for development.

## Prerequisites

- Docker
- Make

That's all! You don't need Node.js or npm installed locally since we're using containerized development.

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd <project-name>
```
---
### Before you continue, do this:
> This is not compulsory and will not affect your development, but if you want some personalization, read through.
- change the package name on `package.json` and `package-lock.json` (always do an highlight(Ctr Shift L) to see places the original name was used)
- change the image and container name on Makefile (always do an highlight(Ctr Shift L) to see places the original name was used)
---
2. Build the development Docker image
```bash
make dev-build
```

3. Start the development server
```bash
make dev
```

The application will be available at `http://localhost:5173`

## Available Commands

### Development
- `make dev` - Start the development server
- `make install` - Install/update dependencies
- `make add` - Add a new dependency (will prompt for package name)
- `make add-dev` - Add a new dev dependency (will prompt for package name)
- `make remove` - Remove a dependency (will prompt for package name)
- `make dev-shell` - Open a shell in the development container

### Cleanup
- `make stop` - Stop the development container
- `make clean` - Remove container, image, and node_modules volume

### Help
- `make help` - Display all available commands

## Managing Dependencies

All dependency management should be done through the provided Make commands to ensure consistency across development environments.

Example of adding a new package:
```bash
make add    # Will prompt for package name
# Enter package name when prompted, e.g., axios
```

## Troubleshooting

1. If you see permission errors:
   - Run `sudo make clean` to remove all Docker artifacts
   - Rebuild with `make dev-build`

2. If the development server isn't reflecting changes:
   - Stop the container with `make stop`
   - Start it again with `make dev`

3. If dependencies seem out of sync:
   - Run `make clean` to remove everything
   - Run `make dev-build` to rebuild the image
   - Run `make install` to reinstall dependencies
   - Run `make dev` to start the server

## Project Structure

```
├── Dockerfile.dev        # Development Docker configuration
├── Makefile             # Development commands
├── package.json         # Project dependencies and scripts
├── src/                 # Source code
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test your changes using the containerized environment
4. Submit a pull request

## License

....