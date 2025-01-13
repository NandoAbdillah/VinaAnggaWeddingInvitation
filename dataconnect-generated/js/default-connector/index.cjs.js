const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'vina-angga-wedding',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

