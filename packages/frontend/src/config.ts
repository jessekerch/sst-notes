const config = {
  // Frontend config
  STRIPE_KEY:
    "pk_test_51Q5SyLKzl2nwnowQaBH40sfkoaD7j76wbEKK7YfNJL6iIjjMyyOvYiFR17vm19oEloBPTYEEZwVxIO6UZYD4bNva00pATk3jzl",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;
