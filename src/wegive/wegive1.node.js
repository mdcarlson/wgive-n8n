import {
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
  NodeExecutionData,
  INodeExecutionData,
  NodeCredentialTestRequest,
  INodeCredentialTestResult,
  NodePropertyTypes,
} from 'n8n-workflow';
import { N8NPropertiesBuilder } from '@devlikeapro/n8n-openapi-node';
import * as openApiSpec from './openapi.json';
import { WeGiveCredentials } from '../credentials/WeGive.credentials';



const properties = new N8NPropertiesBuilder(openApiSpec).build();

export class WeGiveAPINode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'WeGive API',
    name: 'weGiveAPINode',
    icon: 'file:apiName.svg',
    group: ['transform'],
    version: 1,
    description: 'Interact with WeGive online giving platform using OpenAPI spec',
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
      },
    ],
    requestDefaults: {
      baseURL: '={{ $credentials.baseUrl }}',
      headers: {
        Authorization: 'Bearer {{$credentials.apiKey}}',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    properties,
  };

  async execute(this: INodeType, items: INodeExecutionData[]): Promise<INodeExecutionData[][]> {
    // Default implementation delegates to n8n-openapi-node helpers or custom logic you may add

    // For example, pulling operation type and resource from parameters
    try {
      // This generic example, real implementation depends on how you want to map operations
      // to HTTP requests based on properties derived from OpenAPI spec
      return [items];
    } catch (error) {
      throw new NodeOperationError(this.getNode(), error as Error);
    }
  }
}
