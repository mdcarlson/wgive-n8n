import { ICredentialTestFunctions, IExecuteFunctions, INodeType, INodeTypeDescription, INodeExecutionData, INodeCredentialTestResult } from 'n8n-workflow';
export declare class WeGiveAPINode implements INodeType {
    description: INodeTypeDescription;
    methods: {
        credentialTest: {
            weGiveApiTest(this: ICredentialTestFunctions, credential: any): Promise<INodeCredentialTestResult>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
