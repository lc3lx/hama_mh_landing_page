module.exports = {
  apps: [
    {
      name: 'landing',
      cwd: __dirname,
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 3004 --strictPort',
      interpreter: 'node',
      instances: 1,
      autorestart: true,
    },
  ],
};
