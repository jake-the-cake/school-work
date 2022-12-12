const admin = require('firebase-admin');

const { project_id, private_key, client_email } = require("./MIT-Auth-Routes.json");
// serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n')

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key.replace(/\\n/g, '\n')
  })
});

module.exports = admin;