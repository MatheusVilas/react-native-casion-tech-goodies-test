const environments = {
  development: {
    API_URI: 'http://localhost:3333',
  },
  production: {
    API_URI: 'http://api-production.com.br',
  },
};
export default process.env.NODE_ENV === 'development'
  ? environments.development
  : environments.production;
