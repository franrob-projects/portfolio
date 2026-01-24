---
sidebar_position: 5
---

# Troubleshooting Guide Sample

This guide demonstrates effective troubleshooting documentation for common technical issues.

## Connection Issues

### Cannot Connect to the Database

**Symptoms:**
- Application throws "Connection refused" errors
- Database queries time out
- Error message: "Unable to establish connection to database"

#### Possible Causes and Solutions

##### 1. Database Server is Not Running

**Diagnosis:**
```bash
# Check if database process is running
ps aux | grep postgres

# Check database service status
systemctl status postgresql
```

**Solution:**
```bash
# Start the database service
systemctl start postgresql

# Enable auto-start on boot
systemctl enable postgresql
```

##### 2. Incorrect Connection Credentials

**Diagnosis:**
Check your configuration file for typos in credentials:

```yaml
database:
  host: localhost
  port: 5432
  username: app_user
  password: your_password
  database: production_db
```

**Solution:**
1. Verify the username exists in the database
2. Confirm the password is correct (check for special characters that need escaping)
3. Test connection manually:

```bash
psql -h localhost -U app_user -d production_db
```

##### 3. Firewall Blocking Connection

**Diagnosis:**
```bash
# Test if port is accessible
telnet localhost 5432

# Check firewall rules
sudo ufw status
```

**Solution:**
```bash
# Allow database port through firewall
sudo ufw allow 5432/tcp

# Reload firewall
sudo ufw reload
```

##### 4. Wrong Port Number

**Diagnosis:**
Check which port the database is actually running on:

```bash
# Find database port
sudo netstat -tlnp | grep postgres
```

**Solution:**
Update your application's configuration file to match the actual port number.

### API Requests Returning 401 Unauthorized

**Symptoms:**
- All API requests fail with 401 status code
- Error message: "Invalid or expired token"
- Previously working authentication suddenly fails

#### Troubleshooting Steps

**Step 1: Verify the token exists**

Check that your Authorization header is being sent:

```bash
curl -v https://api.example.com/users \
  -H "Authorization: Bearer YOUR_TOKEN"
```

Look for the `Authorization:` header in the output.

**Step 2: Check token expiration**

Decode your JWT token to check the expiration:

```bash
# Using jwt-cli tool
jwt decode YOUR_TOKEN

# Or visit jwt.io in your browser
```

Look for the `exp` claim. If it's in the past, your token has expired.

**Step 3: Verify token format**

Ensure your token follows the correct format:
- Should start with "Bearer " (note the space)
- Token itself should be a long string with no spaces
- No quotes around the token

❌ **Wrong:**
```
Authorization: YOUR_TOKEN
Authorization: Bearer "YOUR_TOKEN"
Authorization: BearerYOUR_TOKEN
```

✅ **Correct:**
```
Authorization: Bearer YOUR_TOKEN
```

**Step 4: Generate a new token**

If the token is expired or invalid:

```bash
# Request new token
curl -X POST https://api.example.com/auth/token \
  -H "Content-Type: application/json" \
  -d '{"username": "your_user", "password": "your_pass"}'
```

**Step 5: Check API key permissions**

Your token might lack required permissions. Contact your administrator to verify your API key has the necessary scopes.

## Performance Issues

### Application Running Slowly

**Symptoms:**
- Pages take more than 3 seconds to load
- API responses are delayed
- High CPU usage
- Memory usage continuously increasing

#### Diagnostic Commands

```bash
# Check CPU and memory usage
top

# Monitor in real-time
htop

# Check disk I/O
iostat -x 1

# View application logs
tail -f /var/log/application/app.log
```

#### Common Solutions

##### Clear Cache

Old cached data can cause slowdowns:

```bash
# Clear application cache
rm -rf /tmp/app-cache/*

# Restart application
systemctl restart app-service
```

##### Check Database Query Performance

Slow database queries are a common culprit:

```sql
-- Find slow queries (PostgreSQL)
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

If you find slow queries, consider:
- Adding database indexes
- Optimizing query structure
- Implementing query result caching

##### Monitor Memory Leaks

If memory usage grows continuously:

```bash
# Track memory usage over time
watch -n 5 'ps aux | grep app-process'

# Generate heap dump (Node.js)
node --inspect app.js
```

Review your code for:
- Unclosed database connections
- Event listeners that aren't removed
- Large objects kept in memory unnecessarily

## Installation and Deployment Issues

### Package Installation Fails

**Symptoms:**
- `npm install` fails with errors
- Missing dependencies errors
- Version conflict warnings

#### Solutions

##### Clear package manager cache

```bash
# npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# yarn
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

##### Check Node.js version

Verify you're using a compatible Node.js version:

```bash
# Check current version
node --version

# Check required version in package.json
cat package.json | grep "engines"
```

Install the correct version using nvm:

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install required Node version
nvm install 20.0.0
nvm use 20.0.0
```

### Docker Container Won't Start

**Symptoms:**
- `docker-compose up` fails immediately
- Container exits with error code
- Port binding errors

#### Diagnostic Steps

**View container logs:**

```bash
# See why container failed
docker logs container-name

# Follow logs in real-time
docker logs -f container-name
```

**Common Issues:**

##### Port Already in Use

```
Error: bind: address already in use
```

**Solution:**

```bash
# Find what's using the port
lsof -i :8080

# Kill the process
kill -9 PID

# Or change the port in docker-compose.yml
ports:
  - "8081:8080"  # Map to different host port
```

##### Volume Mount Issues

```
Error: cannot mount volume: no such file or directory
```

**Solution:**

Check that the source path exists:

```bash
# Verify path exists
ls -la /path/to/volume

# Create if missing
mkdir -p /path/to/volume
```

## Getting Additional Help

If these troubleshooting steps don't resolve your issue:

1. **Check the logs** - Look in `/var/log/application/` for detailed error messages
2. **Search existing issues** - Visit our [GitHub Issues](https://github.com/example/repo/issues) page
3. **Ask the community** - Post in our [discussion forum](https://community.example.com)
4. **Contact support** - Email support@example.com with:
   - Description of the problem
   - Steps to reproduce
   - Error messages (full text)
   - Your environment (OS, version numbers)
   - What you've tried so far

### Providing Good Error Reports

When reporting issues, include:

- **Exact error message** - Copy and paste the full error
- **Steps to reproduce** - Numbered list of actions that trigger the error
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Environment details** - OS, software versions, configuration
- **Screenshots** - If applicable, show the problem visually

**Example:**

```
Title: Database connection fails on startup

Environment:
- OS: Ubuntu 22.04
- Application version: 2.3.1
- Database: PostgreSQL 15.2

Steps to reproduce:
1. Run `npm start`
2. Application attempts to connect to database
3. Connection fails immediately

Expected behavior:
Application should connect to database and start listening on port 3000

Actual behavior:
Application crashes with error: "Connection refused - Unable to connect to localhost:5432"

Logs:
[2026-01-24 14:30:15] ERROR: Database connection failed
[2026-01-24 14:30:15] Error: connect ECONNREFUSED 127.0.0.1:5432
```

This format helps maintainers quickly understand and resolve your issue.
