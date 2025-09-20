import {
  IExecuteFunctions,
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
  INodeExecutionData,
} from 'n8n-workflow';
import { N8NPropertiesBuilder } from '@devlikeapro/n8n-openapi-node';
import * as openApiSpec from './openapi.json';
import { WeGiveCredentials } from '../credentials/WeGive.credentials';



const properties = new N8NPropertiesBuilder(openApiSpec).build();

export class WeGiveAPINode implements INodeType {
  description: INodeTypeDescription = {
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
    inputs: ['main'],
    outputs: ['main'],
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

  methods = {
    credentialTest: {
      async weGiveApiTest(this: IExecuteFunctions, credential: any): Promise<boolean> {
        const credentials = await this.getCredentials('WeGiveCredentials');
        const options = {
          method: 'GET',
          uri: `${credentials.baseUrl}/api/dashboard/campaigns`,
          headers: {
            Authorization: `Bearer ${credentials.apiKey}`,
            Accept: 'application/json',
          },
          json: true,
        };

        try {
          await this.helpers.request(options);
          return true;
        } catch (error) {
          return false;
        }
      },
    },
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    try {
      // Implementation will depend on the n8n-openapi-node library
      // This is a placeholder that returns input items
      // The actual implementation should use the OpenAPI spec to handle requests
      return [items];
    } catch (error) {
      throw new NodeOperationError(this.getNode(), error as Error);
    }
  }
}
