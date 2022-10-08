#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { DemoStack } from '../lib/demo-stack';

const app = new cdk.App();
new DemoStack(app, 'DemoStack');
app.run();
