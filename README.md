# WeGive N8N Node

A custom N8N node for integrating with the WeGive API using OpenAPI specifications.

## Development Setup

### Prerequisites
- Node.js 18+ and npm
- N8N installed globally or locally

### Installation for Testing

#### Option 1: Link to Local N8N Installation
```bash
# Build the node
npm run build

# Link this package globally
npm link

# In your N8N installation directory
npm link wgive-n8n
```

#### Option 2: Copy to N8N Custom Nodes Directory
```bash
# Build the node
npm run build

# Copy to N8N custom nodes directory
mkdir -p ~/.n8n/custom
cp -r dist/ ~/.n8n/custom/wgive-n8n
```

#### Option 3: Development with N8N Source
1. Clone N8N repository
2. Place this node in `packages/nodes-base/nodes/WeGive/`
3. Follow N8N development setup

### Testing the Node

1. **Start N8N**:
   ```bash
   n8n start
   ```

2. **Access N8N**: Open http://localhost:5678

3. **Test Credentials**:
   - Go to Settings > Credentials
   - Add new "WeGive API Credentials"
   - Enter your WeGive API details
   - Test the connection

4. **Create Workflow**:
   - Add the WeGive node to a workflow
   - Configure it with your credentials
   - Test operations

### API Configuration

- **Base URL**: `https://api.wegive.com` (production) or `https://api.sandbox.wegive.com` (sandbox)
- **API Key**: Obtain from WeGive Dashboard

## Available Operations

The node supports all WeGive API operations defined in the OpenAPI specification:
- Campaign management
- Donor operations
- Event management
- Checkout sessions
- And more...

## Development Commands

- `npm run build` - Compile TypeScript
- `npm run build:watch` - Watch mode compilation
- `npm run typecheck` - Type checking only
- `npm run clean` - Clean build directory