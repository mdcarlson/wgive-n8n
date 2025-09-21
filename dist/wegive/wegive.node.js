"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeGiveAPINode = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const n8n_openapi_node_1 = require("@devlikeapro/n8n-openapi-node");
const openApiSpec = __importStar(require("./openapi.json"));
const properties = new n8n_openapi_node_1.N8NPropertiesBuilder(openApiSpec).build();
class WeGiveAPINode {
    constructor() {
        this.description = {
            displayName: 'WeGive API',
            name: 'WeGive',
            icon: 'file:apiName.svg',
            group: ['transform'],
            version: 1,
            description: 'Interact with WeGive online giving platform using OpenAPI spec',
            documentationUrl: 'https://www.wegive.com/api-terms-of-use',
            defaults: {
                name: 'WeGive API',
                color: '#772244',
            },
            inputs: ["main" /* NodeConnectionType.Main */],
            outputs: ["main" /* NodeConnectionType.Main */],
            credentials: [
                {
                    name: 'WeGiveCredentials',
                    required: true,
                    testedBy: 'weGiveApiTest',
                },
            ],
            requestDefaults: {
                baseURL: '={{ $credentials.baseUrl }}',
                headers: {
                    Authorization: 'Bearer {{ $credentials.apiKey }}',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties,
        };
        this.methods = {
            credentialTest: {
                async weGiveApiTest(credential) {
                    try {
                        const options = {
                            method: 'GET',
                            url: `${credential.baseUrl}/api/dashboard/campaigns`,
                            headers: {
                                Authorization: `Bearer ${credential.apiKey}`,
                                Accept: 'application/json',
                            },
                            json: true,
                        };
                        await this.helpers.request(options);
                        return {
                            status: 'OK',
                            message: 'Authentication successful',
                        };
                    }
                    catch (error) {
                        return {
                            status: 'Error',
                            message: `Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
                        };
                    }
                },
            },
        };
    }
    async execute() {
        const items = this.getInputData();
        try {
            // Implementation will depend on the n8n-openapi-node library
            // This is a placeholder that returns input items
            // The actual implementation should use the OpenAPI spec to handle requests
            return [items];
        }
        catch (error) {
            throw new n8n_workflow_1.NodeOperationError(this.getNode(), error);
        }
    }
}
exports.WeGiveAPINode = WeGiveAPINode;
