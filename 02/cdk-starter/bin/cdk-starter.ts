#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { CdkStarterStack } from "../lib/cdk-starter-stack";

const app = new cdk.App();

// We have single stack here but we can have multiple stacks as well
// new CdkStarterStack
// new SomeOtherStack
// etc

new CdkStarterStack(app, "CdkStarterStack", {
  // If you don't specify 'env', this stack will be environment-agnostic.
  // Uncomment the next line to specialize this stack for the AWS Account
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
