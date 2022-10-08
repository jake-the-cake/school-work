import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3'); 
//import assets = require('@aws-cdk/assets')
import path = require('path'); 
import s3deploy = require('@aws-cdk/aws-s3-deployment'); 

export class DemoStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log('directory = '+ __dirname);
    var mypath = path.join(__dirname,'assets');

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true
    });
    
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      source: s3deploy.Source.asset(mypath),
      destinationBucket: websiteBucket
      //destinationKeyPrefix: 'web/static' // optional prefix in destination bucket
    });

    websiteBucket.grantPublicAccess('*', 's3:GetObject');
  
  }
}

