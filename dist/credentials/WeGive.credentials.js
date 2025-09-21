"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeGiveCredentials = void 0;
class WeGiveCredentials {
    constructor() {
        this.name = 'WeGiveCredentials';
        this.displayName = 'WeGive API Credentials';
        this.documentationUrl = 'https://www.wegive.com/api-terms-of-use';
        this.properties = [
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'https://api.wegive.com',
                placeholder: 'https://api.wegive.com',
                description: 'Base URL of the API',
                required: true,
            },
            {
                displayName: 'WeGive API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                },
                description: 'Bearer token for API authentication',
                required: true,
            },
        ];
    }
}
exports.WeGiveCredentials = WeGiveCredentials;
