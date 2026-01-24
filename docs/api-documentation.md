---
sidebar_position: 2
---

# API Documentation Sample

This page demonstrates technical API reference documentation for a fictional user management REST API.

## Authentication

All API requests require authentication using a Bearer token in the Authorization header.

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Get User by ID

Retrieves detailed information about a specific user.

### Endpoint

```
GET /api/v1/users/{userId}
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | The unique identifier of the user |

### Request Example

```bash
curl -X GET https://api.example.com/api/v1/users/abc123 \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json"
```

### Response

Returns a User object if the request succeeds.

#### Success Response (200 OK)

```json
{
  "id": "abc123",
  "email": "user@example.com",
  "firstName": "Jane",
  "lastName": "Smith",
  "createdAt": "2025-01-15T10:30:00Z",
  "status": "active",
  "role": "member"
}
```

#### Error Responses

| Status Code | Description |
|-------------|-------------|
| 401 | Unauthorized - Invalid or missing API token |
| 404 | User not found |
| 429 | Rate limit exceeded |

## Create User

Creates a new user account.

### Endpoint

```
POST /api/v1/users
```

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | User's email address (must be unique) |
| `firstName` | string | Yes | User's first name |
| `lastName` | string | Yes | User's last name |
| `role` | string | No | User role (defaults to "member") |

### Request Example

```bash
curl -X POST https://api.example.com/api/v1/users \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "member"
  }'
```

### Response

#### Success Response (201 Created)

```json
{
  "id": "xyz789",
  "email": "newuser@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "createdAt": "2026-01-24T14:20:00Z",
  "status": "active",
  "role": "member"
}
```

#### Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Invalid or missing API token |
| 409 | Conflict - Email address already exists |
| 422 | Unprocessable Entity - Validation failed |

## Rate Limits

API requests are limited to 1000 requests per hour per API token. Rate limit information is included in response headers:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1706108400
```

## Error Handling

All error responses follow a consistent format:

```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested user could not be found",
    "details": {
      "userId": "abc123"
    }
  }
}
```

## Best Practices

- Store API tokens securely and never commit them to version control
- Implement exponential backoff when rate limits are exceeded
- Validate input data client-side before making API requests
- Use HTTPS for all API requests in production
