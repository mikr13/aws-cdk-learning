#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { CdkIntermediateStack } from "../lib/cdk-intermediate-stack";
import { PhotoStack } from "../lib/photo-stack";

const app = new cdk.App();

new CdkIntermediateStack(app, "CdkIntermediateStack");
new PhotoStack(app, "PhotoStack");
