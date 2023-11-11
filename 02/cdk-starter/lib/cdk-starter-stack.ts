import * as cdk from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: cdk.Duration) {
    super(scope, id);

    // L2 construct
    new Bucket(this, "L3Bucket", {
      lifecycleRules: [
        {
          expiration,
        },
      ],
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create an s3 bucket 3 ways:

    // L1 construct
    new CfnBucket(this, "MyL1Bucket", {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: "Enabled", // if we make errors in any configuration values, we'll see the error at the last step of deployment using cfn, that's why we use L2
          },
        ],
      },
    });

    // L2 construct
    const L2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2),
        },
      ],
    });

    // L3 construct
    new L3Bucket(this, "MyL3Bucket", cdk.Duration.days(2));

    // to print what constructs name will be created on cloudformation
    new cdk.CfnOutput(this, "MyL2BucketName", {
      value: L2Bucket.bucketName,
    });
  }
}
