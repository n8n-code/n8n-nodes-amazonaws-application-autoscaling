import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsApplicationAutoscaling implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amazonaws Application Autoscaling',
		name: 'N8nDevAmazonawsApplicationAutoscaling',
		icon: { light: 'file:./amazonaws-application-autoscaling.png', dark: 'file:./amazonaws-application-autoscaling.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Configure auto scaling for AppStream 2.0 fleets, Aurora Replicas, and more.',
		defaults: { name: 'Amazonaws Application Autoscaling' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsApplicationAutoscalingApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
