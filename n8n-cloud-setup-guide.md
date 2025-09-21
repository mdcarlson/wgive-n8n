# WeGive API Integration for N8N Cloud

Since N8N Cloud doesn't support custom nodes, use the HTTP Request node to access WeGive API.

## Step 1: Create WeGive API Credentials

1. Go to **Settings** → **Credentials** in your N8N Cloud account
2. Click **Add Credential**
3. Search for **"Header Auth"**
4. Configure:
   - **Name**: WeGive API
   - **Header Name**: `Authorization`
   - **Header Value**: `Bearer YOUR_WEGIVE_API_KEY`
5. **Save**

## Step 2: Common WeGive API Endpoints

### Base URLs:
- **Production**: `https://api.wegive.com/api`
- **Sandbox**: `https://api.sandbox.wegive.com/api`

### Key Endpoints:

#### Get Campaigns
- **Method**: GET
- **URL**: `{{$credentials["WeGive API"].baseUrl || "https://api.wegive.com/api"}}/dashboard/campaigns`
- **Query Parameters**:
  - `view`: all, active, archived
  - `type`: general, fundraiser, event
  - `page`: page number
  - `count`: items per page (max 200)

#### Get Campaign Details
- **Method**: GET
- **URL**: `{{$credentials["WeGive API"].baseUrl || "https://api.wegive.com/api"}}/dashboard/campaigns/{{$node["Previous Node"].json["campaign_id"]}}`

#### Get Donors
- **Method**: GET
- **URL**: `{{$credentials["WeGive API"].baseUrl || "https://api.wegive.com/api"}}/dashboard/donors`

#### Get Transactions
- **Method**: GET
- **URL**: `{{$credentials["WeGive API"].baseUrl || "https://api.wegive.com/api"}}/dashboard/transactions`

## Step 3: HTTP Request Node Configuration

For each WeGive API call:

1. Add **HTTP Request** node
2. Configure:
   - **Method**: GET/POST/PUT/DELETE as needed
   - **URL**: Use endpoint from above
   - **Authentication**: Select "Predefined Credential Type" → "Header Auth"
   - **Credential**: Select your "WeGive API" credential
   - **Headers**:
     - `Accept`: `application/json`
     - `Content-Type`: `application/json` (for POST/PUT)

## Step 4: Handle Responses

WeGive API returns paginated data:
```json
{
  "data": [...],
  "meta": {
    "total": "100",
    "current_page": 1,
    "last_page": 5,
    "per_page": 25,
    "from": 1,
    "to": 25
  }
}
```

Use **Code** node to process responses:
```javascript
return items.map(item => ({
  json: {
    campaigns: item.json.data,
    pagination: item.json.meta
  }
}));
```