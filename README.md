# Minecraft Family Website

Quick and simple source code for Minecraft "Family" web server.

**Live site:** https://minecraft-family.ca/

## Features

- Modern responsive design
- Multi-language support (English/French)
- Docker containerization for easy deployment
- Optimized static site with Nginx

## Quick Start

### Local Development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

### Docker Deployment

See [DOCKER.md](DOCKER.md) for complete Docker setup and deployment instructions.

Quick Docker start:
```bash
docker-compose up -d
```

Visit `http://localhost:8080`

## Project Structure

- `index.html` - Main website content with translation markup
- `style.css` - Modern CSS with responsive design
- `script.js` - Language switcher logic
- `translations.json` - English/French translations
- `Dockerfile` - Container image definition
- `docker-compose.yml` - Local development setup
- `nginx.conf` - Web server configuration

## Documentation

- [Docker Documentation](DOCKER.md) - Containerization and deployment guide
