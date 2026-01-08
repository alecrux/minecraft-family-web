# Docker Setup for Minecraft Family Website

This document explains how to run the website in Docker.

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# Visit the site at http://localhost:8080
```

The website will automatically restart if the container stops.

### Using Docker CLI

```bash
# Build the image
docker build -t minecraft-family-web .

# Run the container
docker run -d \
  --name minecraft-family-web \
  -p 8080:80 \
  minecraft-family-web
```

Visit `http://localhost:8080` in your browser.

## Commands

### Docker Compose Commands

```bash
# Start the container
docker-compose up -d

# Stop the container
docker-compose down

# View logs
docker-compose logs -f

# Rebuild the image
docker-compose up -d --build
```

### Docker CLI Commands

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# Stop the container
docker stop minecraft-family-web

# Start the container
docker start minecraft-family-web

# Remove the container
docker rm minecraft-family-web

# View logs
docker logs -f minecraft-family-web
```

## Development with Live Reload

For development with file watching:

```bash
docker-compose up
```

The `docker-compose.yml` mounts the current directory as a read-only volume, so changes to your files are reflected immediately (nginx will serve the latest files).

## Production Deployment

To deploy to production, consider:

1. **Change port in docker-compose.yml**: Replace `8080:80` with `80:80` to serve on standard HTTP port
2. **Add HTTPS/SSL**: Configure nginx with SSL certificates
3. **Use a reverse proxy**: Put nginx behind a reverse proxy like Traefik or haproxy
4. **Environment variables**: Customize timezone and other settings

## Image Details

- **Base Image**: `nginx:alpine` - Lightweight (~40MB)
- **Features**:
  - Gzip compression for better performance
  - Cache headers for static assets
  - Health checks enabled
  - Automatic index.html serving for SPA compatibility

## Troubleshooting

### Port already in use
Change the port in `docker-compose.yml` (first number in `ports:`):
```yaml
ports:
  - "8081:80"  # Use 8081 instead
```

### Container won't start
Check logs:
```bash
docker-compose logs
```

### Changes not reflecting
Ensure the volume is mounted correctly:
```bash
docker-compose down
docker-compose up -d --build
```

## Size and Performance

- Image size: ~40MB (nginx:alpine)
- Memory usage: ~5-10MB idle
- Startup time: <1 second
- Supports up to 1000+ concurrent connections

## Next Steps

- Add SSL/TLS certificates for HTTPS
- Configure domain name in nginx.conf
- Set up automated backups
- Add monitoring and logging solutions
