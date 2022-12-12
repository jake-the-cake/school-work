const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "kogs-94e74";
const private_key_id = "5773e02e412e41ed99ec4c0af682ab306fd2dbfa";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWGpbjXwNSpmY1\nnB3bm/4mc8SGxV8Sux7GNGZQq5XIynGHWE3YQt2bYxiZvyCn23zur2Hkuy/4HS0W\nU3mUws8S4NVCWgzDOS1Hw0eHRCaUtECgHoDKZRTNuN91zvoRiWHtdhZCMxo1CYaK\nEspOmdVouvrxnY52xfy8iuizrvNDKoknwH2mL04CPu2MC96M+ZVcO3ns4Q3laA+m\ndLpGYMrY/Bpyg3pOx6aurp3QM6q4gLo3QGxWVaFUd9jna3K07CPWHRQGqUy0ZWxZ\n+FxlBc1Z34uI2IL3eNYLdNszseQOeVapfBV6yuJySD0HzlhwX10j+LGRKWRDqNCa\n+WGZ48uFAgMBAAECggEAaapFvYEuyqOE3gBmW/PowmFwJHNUMJJY5ckGldmY2rfO\nv9U81fZqGD4X7gj9vNn+Fm5ICfK4AeOkVNhtsJVUTSTZGx4GHnMhfcFKk992iv1K\nx7tGJJ0uXzlWT3YOxIjg46jb42AFFxfUZmBPp+sT/9QH9SalIMklqoeDwOoe9I4q\nUrDMgsfozNy6XYZ8AxvI2iUpU+5bpk2lQtJWjJ7bTMDhKn+zjCppmGBxqW85nsNG\nGdRrcmMlrpIdOEUp16pyMouRMCEw0ixKvBkVmcqUKzZSGG5GXRDt0W/13X8B32h8\nnw3NwxDH8tWPQPNZAYcOJ39QTK8XpOQe66Obx177IQKBgQDzDaDtlLFy2YB8d+ot\nOmDk7nZcgAIKo4wepMO7PYa9erPW0KRYSswTnWaaPclDwf+YRer/6EQTMV4hyKgg\nBhD2nGkE+cjQwqQPBCmqSDTEDPX1q/csk+ICSCl0OCjgOXOIU/BC886lqx6ULeZr\nF3mUkGPxjLnWaZ36IhvGT+a2VwKBgQDhgjIO7pFUgShBIMnrgB/oa2EraQLa0pjL\ndF2oO2avX7SeuNmDToaT/sai7onIzqNJWan59UQ1ywZfd6T57zfMTq4Dj2wot1We\nnUPCfVBTBYgohS4XCxMJcF0jH9eJMfTuYJudNJ5PnldsRDLRgvDuIuSItTplGxrT\n0Ir6wD9LgwKBgFTpvf9Co3vsYOcbPcTvUEqqxM8sKYpt+NX72iXgKOKpq4qw+bme\n6A0yQFZCn738WL9qLd+Z1a6e4LQM1i/Z7rM5kbcbTP0iAw779VJ4R3b20Dc0DPaV\n86+4ZkMkG6O6bpKCQL4jT16xmc1K++UOHnu4tjH9aC9wVrC8mdd+squhAoGAR3Ya\npuCy7TSArSLW2eogMmbUxAzi+rUB9ndJtqYcRDbv5dxuEU4xF3UFPVyaDShuVjAz\nzSIMG3/a5SXlAc7sv7GvMzGf9MckOr9bWaacbbKzEyQhFuxLfBI/cYIFq1RJacDz\njz29bT2gNo7mC76S2uPzx96mQqP0PGs5n3yMkkECgYBWZylXkbBvlt0FAO45fUB3\nkauqf3GzKDfPNt7aswPGU0CjWqjrT6VG8CEiI8+9jS4pABaZsJvZT34iHlrG41Mm\nSukG8Y+Pdf/VsxYDG4311KWPX7Y4dq0lJfjZLtWx4Su0pCmIwuKFcaTJd134wham\nf1zZhwIoqeastePvyhVcvQ==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-yfi86@kogs-94e74.iam.gserviceaccount.com";
const client_id = "108406486084031070012";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yfi86%40kogs-94e74.iam.gserviceaccount.com";


// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;