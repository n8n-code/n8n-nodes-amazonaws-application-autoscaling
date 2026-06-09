import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Delete Scaling Policy",
					"value": "Delete Scaling Policy",
					"action": "Delete Scaling Policy",
					"description": "<p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy\">Delete a step scaling policy</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy\">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy"
						}
					}
				},
				{
					"name": "Delete Scheduled Action",
					"value": "Delete Scheduled Action",
					"action": "Delete Scheduled Action",
					"description": "<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action\">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction"
						}
					}
				},
				{
					"name": "Deregister Scalable Target",
					"value": "Deregister Scalable Target",
					"action": "Deregister Scalable Target",
					"description": "<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href=\"https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html\">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget"
						}
					}
				},
				{
					"name": "Describe Scalable Targets",
					"value": "Describe Scalable Targets",
					"action": "Describe Scalable Targets",
					"description": "<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets"
						}
					}
				},
				{
					"name": "Describe Scaling Activities",
					"value": "Describe Scaling Activities",
					"action": "Describe Scaling Activities",
					"description": "<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html\">Scaling activities for Application Auto Scaling</a>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities"
						}
					}
				},
				{
					"name": "Describe Scaling Policies",
					"value": "Describe Scaling Policies",
					"action": "Describe Scaling Policies",
					"description": "<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html\">Target tracking scaling policies</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html\">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies"
						}
					}
				},
				{
					"name": "Describe Scheduled Actions",
					"value": "Describe Scheduled Actions",
					"action": "Describe Scheduled Actions",
					"description": "<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html\">Scheduled scaling</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html\">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html\">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource"
						}
					}
				},
				{
					"name": "Put Scaling Policy",
					"value": "Put Scaling Policy",
					"action": "Put Scaling Policy",
					"description": "<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html\">Target tracking scaling policies</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html\">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy"
						}
					}
				},
				{
					"name": "Put Scheduled Action",
					"value": "Put Scheduled Action",
					"action": "Put Scheduled Action",
					"description": "<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html\">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction"
						}
					}
				},
				{
					"name": "Register Scalable Target",
					"value": "Register Scalable Target",
					"action": "Register Scalable Target",
					"description": "<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href=\"https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html\">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href=\"https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html\">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href=\"https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html\">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href=\"https://en.wikipedia.org/wiki/Eventual_consistency\">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html\">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html\">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.TagResource"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AnyScaleFrontendService.UntagResource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DeleteScalingPolicy",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Delete Scaling Policy",
					"value": "AnyScaleFrontendService.DeleteScalingPolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Policy Name",
			"name": "PolicyName",
			"type": "string",
			"default": "",
			"description": "The name of the scaling policy.",
			"routing": {
				"send": {
					"property": "PolicyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DeleteScheduledAction",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Delete Scheduled Action",
					"value": "AnyScaleFrontendService.DeleteScheduledAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scheduled Action Name",
			"name": "ScheduledActionName",
			"type": "string",
			"default": "",
			"description": "The name of the scheduled action.",
			"routing": {
				"send": {
					"property": "ScheduledActionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DeregisterScalableTarget",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Deregister Scalable Target",
					"value": "AnyScaleFrontendService.DeregisterScalableTarget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DescribeScalableTargets",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Describe Scalable Targets",
					"value": "AnyScaleFrontendService.DescribeScalableTargets"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Resource Ids",
			"name": "ResourceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token for the next set of results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scalable Targets"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DescribeScalingActivities",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Describe Scaling Activities",
					"value": "AnyScaleFrontendService.DescribeScalingActivities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token for the next set of results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Include Not Scaled Activities",
			"name": "IncludeNotScaledActivities",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether to include activities that aren't scaled (<i>not scaled activities</i>) in the response. Not scaled activities are activities that aren't completed or started for various reasons, such as preventing infinite scaling loops. For help interpreting the not scaled reason details in the response, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html\">Scaling activities for Application Auto Scaling</a>.",
			"routing": {
				"send": {
					"property": "IncludeNotScaledActivities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DescribeScalingPolicies",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Describe Scaling Policies",
					"value": "AnyScaleFrontendService.DescribeScalingPolicies"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Policy Names",
			"name": "PolicyNames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The names of the scaling policies to describe.",
			"routing": {
				"send": {
					"property": "PolicyNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of scalable targets. This value can be between 1 and 10. The default value is 10.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 10 results and a <code>NextToken</code> value, if applicable.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token for the next set of results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scaling Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.DescribeScheduledActions",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Describe Scheduled Actions",
					"value": "AnyScaleFrontendService.DescribeScheduledActions"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Action Names",
			"name": "ScheduledActionNames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The names of the scheduled actions to describe.",
			"routing": {
				"send": {
					"property": "ScheduledActionNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of scheduled action results. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token for the next set of results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.ListTagsForResource",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service List Tags For Resource",
					"value": "AnyScaleFrontendService.ListTagsForResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ARN",
			"name": "ResourceARN",
			"type": "string",
			"default": "",
			"description": "<p>Specify the ARN of the scalable target.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>",
			"routing": {
				"send": {
					"property": "ResourceARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.PutScalingPolicy",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Put Scaling Policy",
					"value": "AnyScaleFrontendService.PutScalingPolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Policy Name",
			"name": "PolicyName",
			"type": "string",
			"default": "",
			"description": "<p>The name of the scaling policy.</p> <p>You cannot change the name of a scaling policy, but you can delete the original scaling policy and create a new scaling policy with the same settings and a different name.</p>",
			"routing": {
				"send": {
					"property": "PolicyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Type",
			"name": "PolicyType",
			"type": "options",
			"default": "StepScaling",
			"description": "<p>The scaling policy type. This parameter is required if you are creating a scaling policy.</p> <p>The following policy types are supported: </p> <p> <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p> <p> <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html\">Target tracking scaling policies</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html\">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
			"options": [
				{
					"name": "Step Scaling",
					"value": "StepScaling"
				},
				{
					"name": "Target Tracking Scaling",
					"value": "TargetTrackingScaling"
				}
			],
			"routing": {
				"send": {
					"property": "PolicyType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "Step Scaling Policy Configuration",
			"name": "StepScalingPolicyConfiguration",
			"type": "json",
			"default": "{\n  \"StepAdjustments\": {},\n  \"MinAdjustmentMagnitude\": {},\n  \"Cooldown\": {},\n  \"MetricAggregationType\": {}\n}",
			"description": "<p>A step scaling policy.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>StepScaling</code>.</p>",
			"routing": {
				"send": {
					"property": "StepScalingPolicyConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "Target Tracking Scaling Policy Configuration",
			"name": "TargetTrackingScalingPolicyConfiguration",
			"type": "json",
			"default": "{\n  \"PredefinedMetricSpecification\": {},\n  \"CustomizedMetricSpecification\": {},\n  \"ScaleOutCooldown\": {},\n  \"ScaleInCooldown\": {},\n  \"DisableScaleIn\": {}\n}",
			"description": "<p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>TargetTrackingScaling</code>.</p>",
			"routing": {
				"send": {
					"property": "TargetTrackingScalingPolicyConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scaling Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.PutScheduledAction",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Put Scheduled Action",
					"value": "AnyScaleFrontendService.PutScheduledAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "Schedule",
			"type": "string",
			"default": "",
			"description": "<p>The schedule for this action. The following formats are supported:</p> <ul> <li> <p>At expressions - \"<code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code>\"</p> </li> <li> <p>Rate expressions - \"<code>rate(<i>value</i> <i>unit</i>)</code>\"</p> </li> <li> <p>Cron expressions - \"<code>cron(<i>fields</i>)</code>\"</p> </li> </ul> <p>At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.</p> <p>At and cron expressions use Universal Coordinated Time (UTC) by default.</p> <p>The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].</p> <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p> <p>For more information and examples, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/examples-scheduled-actions.html\">Example scheduled actions for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
			"routing": {
				"send": {
					"property": "Schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "Timezone",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the time zone used when setting a scheduled action by using an at or cron expression. If a time zone is not provided, UTC is used by default.</p> <p>Valid values are the canonical names of the IANA time zones supported by Joda-Time (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href=\"https://www.joda.org/joda-time/timezones.html\">https://www.joda.org/joda-time/timezones.html</a>.</p>",
			"routing": {
				"send": {
					"property": "Timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scheduled Action Name",
			"name": "ScheduledActionName",
			"type": "string",
			"default": "",
			"description": "The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target. ",
			"routing": {
				"send": {
					"property": "ScheduledActionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "StartTime",
			"type": "string",
			"default": "",
			"description": "The date and time for this scheduled action to start, in UTC.",
			"routing": {
				"send": {
					"property": "StartTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "EndTime",
			"type": "string",
			"default": "",
			"description": "The date and time for the recurring schedule to end, in UTC.",
			"routing": {
				"send": {
					"property": "EndTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Scalable Target Action",
			"name": "ScalableTargetAction",
			"type": "json",
			"default": "{\n  \"MaxCapacity\": {}\n}",
			"description": "The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.",
			"routing": {
				"send": {
					"property": "ScalableTargetAction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Scheduled Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.RegisterScalableTarget",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Register Scalable Target",
					"value": "AnyScaleFrontendService.RegisterScalableTarget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Namespace",
			"name": "ServiceNamespace",
			"type": "options",
			"default": "ecs",
			"description": "The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.",
			"options": [
				{
					"name": "Ecs",
					"value": "ecs"
				},
				{
					"name": "Elasticmapreduce",
					"value": "elasticmapreduce"
				},
				{
					"name": "Ec 2",
					"value": "ec2"
				},
				{
					"name": "Appstream",
					"value": "appstream"
				},
				{
					"name": "Dynamodb",
					"value": "dynamodb"
				},
				{
					"name": "Rds",
					"value": "rds"
				},
				{
					"name": "Sagemaker",
					"value": "sagemaker"
				},
				{
					"name": "Custom Resource",
					"value": "custom-resource"
				},
				{
					"name": "Comprehend",
					"value": "comprehend"
				},
				{
					"name": "Lambda",
					"value": "lambda"
				},
				{
					"name": "Cassandra",
					"value": "cassandra"
				},
				{
					"name": "Kafka",
					"value": "kafka"
				},
				{
					"name": "Elasticache",
					"value": "elasticache"
				},
				{
					"name": "Neptune",
					"value": "neptune"
				}
			],
			"routing": {
				"send": {
					"property": "ServiceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Id",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scalable Dimension",
			"name": "ScalableDimension",
			"type": "options",
			"default": "ecs:service:DesiredCount",
			"description": "<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>",
			"options": [
				{
					"name": "Ecs Service Desired Count",
					"value": "ecs:service:DesiredCount"
				},
				{
					"name": "Ec 2 Spot Fleet Request Target Capacity",
					"value": "ec2:spot-fleet-request:TargetCapacity"
				},
				{
					"name": "Elasticmapreduce Instancegroup Instance Count",
					"value": "elasticmapreduce:instancegroup:InstanceCount"
				},
				{
					"name": "Appstream Fleet Desired Capacity",
					"value": "appstream:fleet:DesiredCapacity"
				},
				{
					"name": "Dynamodb Table Read Capacity Units",
					"value": "dynamodb:table:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Table Write Capacity Units",
					"value": "dynamodb:table:WriteCapacityUnits"
				},
				{
					"name": "Dynamodb Index Read Capacity Units",
					"value": "dynamodb:index:ReadCapacityUnits"
				},
				{
					"name": "Dynamodb Index Write Capacity Units",
					"value": "dynamodb:index:WriteCapacityUnits"
				},
				{
					"name": "Rds Cluster Read Replica Count",
					"value": "rds:cluster:ReadReplicaCount"
				},
				{
					"name": "Sagemaker Variant Desired Instance Count",
					"value": "sagemaker:variant:DesiredInstanceCount"
				},
				{
					"name": "Custom Resource Resource Type Property",
					"value": "custom-resource:ResourceType:Property"
				},
				{
					"name": "Comprehend Document Classifier Endpoint Desired Inference Units",
					"value": "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Comprehend Entity Recognizer Endpoint Desired Inference Units",
					"value": "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
				},
				{
					"name": "Lambda Function Provisioned Concurrency",
					"value": "lambda:function:ProvisionedConcurrency"
				},
				{
					"name": "Cassandra Table Read Capacity Units",
					"value": "cassandra:table:ReadCapacityUnits"
				},
				{
					"name": "Cassandra Table Write Capacity Units",
					"value": "cassandra:table:WriteCapacityUnits"
				},
				{
					"name": "Kafka Broker Storage Volume Size",
					"value": "kafka:broker-storage:VolumeSize"
				},
				{
					"name": "Elasticache Replication Group Node Groups",
					"value": "elasticache:replication-group:NodeGroups"
				},
				{
					"name": "Elasticache Replication Group Replicas",
					"value": "elasticache:replication-group:Replicas"
				},
				{
					"name": "Neptune Cluster Read Replica Count",
					"value": "neptune:cluster:ReadReplicaCount"
				}
			],
			"routing": {
				"send": {
					"property": "ScalableDimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Min Capacity",
			"name": "MinCapacity",
			"type": "number",
			"default": 0,
			"description": "<p>The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand. This property is required when registering a new scalable target.</p> <p>For the following resources, the minimum value allowed is 0.</p> <ul> <li> <p>AppStream 2.0 fleets</p> </li> <li> <p> Aurora DB clusters</p> </li> <li> <p>ECS services</p> </li> <li> <p>EMR clusters</p> </li> <li> <p>Lambda provisioned concurrency</p> </li> <li> <p>SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets</p> </li> <li> <p>custom resources</p> </li> </ul> <p>It's strongly recommended that you specify a value greater than 0. A value greater than 0 means that data points are continuously reported to CloudWatch that scaling policies can use to scale on a metric like average CPU utilization.</p> <p>For all other resources, the minimum allowed value depends on the type of resource that you are using. If you provide a value that is lower than what a resource can accept, an error occurs. In which case, the error message will provide the minimum value that the resource can accept.</p>",
			"routing": {
				"send": {
					"property": "MinCapacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Max Capacity",
			"name": "MaxCapacity",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand. This property is required when registering a new scalable target.</p> <p>Although you can specify a large maximum capacity, note that service quotas might impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html\">Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>",
			"routing": {
				"send": {
					"property": "MaxCapacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Role ARN",
			"name": "RoleARN",
			"type": "string",
			"default": "",
			"description": "<p>This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. </p> <p>If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles\">Application Auto Scaling IAM roles</a>.</p>",
			"routing": {
				"send": {
					"property": "RoleARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Suspended State",
			"name": "SuspendedState",
			"type": "json",
			"default": "{\n  \"DynamicScalingOutSuspended\": {},\n  \"ScheduledScalingSuspended\": {}\n}",
			"description": "<p>An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to <code>true</code> suspends the specified scaling activities. Setting it to <code>false</code> (default) resumes the specified scaling activities. </p> <p> <b>Suspension Outcomes</b> </p> <ul> <li> <p>For <code>DynamicScalingInSuspended</code>, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.</p> </li> <li> <p>For <code>DynamicScalingOutSuspended</code>, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.</p> </li> <li> <p>For <code>ScheduledScalingSuspended</code>, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended. </p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html\">Suspending and resuming scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
			"routing": {
				"send": {
					"property": "SuspendedState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "<p>Assigns one or more tags to the scalable target. Use this parameter to tag the scalable target when it is created. To tag an existing scalable target, use the <a>TagResource</a> operation.</p> <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required. You cannot have more than one tag on a scalable target with the same tag key.</p> <p>Use tags to control access to a scalable target. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html\">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Scalable Target"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.TagResource",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Tag Resource",
					"value": "AnyScaleFrontendService.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ARN",
			"name": "ResourceARN",
			"type": "string",
			"default": "",
			"description": "<p>Identifies the Application Auto Scaling scalable target that you want to apply tags to.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>",
			"routing": {
				"send": {
					"property": "ResourceARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "<p>The tags assigned to the resource. A tag is a label that you assign to an AWS resource.</p> <p>Each tag consists of a tag key and a tag value.</p> <p>You cannot have more than one tag on an Application Auto Scaling scalable target with the same tag key. If you specify an existing tag key with a different tag value, Application Auto Scaling replaces the current tag value with the specified one.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html\">User-defined tag restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AnyScaleFrontendService.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AnyScaleFrontendService.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "Any Scale Frontend Service Untag Resource",
					"value": "AnyScaleFrontendService.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ARN",
			"name": "ResourceARN",
			"type": "string",
			"default": "",
			"description": "<p>Identifies the Application Auto Scaling scalable target from which to remove tags.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>",
			"routing": {
				"send": {
					"property": "ResourceARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "One or more tag keys. Specify only the tag keys, not the tag values.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
];
