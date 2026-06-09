import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsApplicationAutoscaling implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-application-autoscaling',
		name: 'N8nDevAmazonawsApplicationAutoscaling',
		icon: { light: 'file:./amazonaws-application-autoscaling.png', dark: 'file:./amazonaws-application-autoscaling.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'With Application Auto Scaling, you can configure automatic scaling for the following resources: Amazon AppStream 2.0 fleets Amazon Aurora Replicas <l..',
		defaults: { name: 'amazonaws-application-autoscaling' },
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
