import { ICredentialsType, INodeProperties } from 'n8n-workflow';

export class WeGiveCredentials implements ICredentialsType {
  name = 'WeGiveCredentials';

  displayName = 'WeGive API Credentials';

  documentationUrl = 'https://www.wegive.com/api-terms-of-use';

  properties: INodeProperties[] = [
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
