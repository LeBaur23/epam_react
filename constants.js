const path = require('path');

const MODES = {
    DEV: 'development',
    PROD: 'production'
};

const ENV = process.env.NODE_ENV;

const rootDir = path.resolve(__dirname, '../');
const srcDir = path.resolve(rootDir, 'src');

const paths = {
    assets: path.resolve(srcDir, 'assets'),
    config: path.resolve(__dirname),
    dist: path.resolve(rootDir, 'dist'),
    public: '/',
    root: rootDir,
    src: srcDir
};

const libCssClasses = ['mdc-'];

module.exports = {
    ENV,
    entries: [path.resolve(paths.src, 'index.tsx')],
    isProduction: ENV === MODES.PROD,
    libCssClasses,
    MODES,
    paths,
    devServer: {
        port: 8000
    },
    backend: {
        local: {
            protocol: 'http',
            host: 'localhost',
            port: 8001
        },
        remote: {
            protocol: 'https',
            host: 'fe-mdm-arm-dev.dev-test.epm-insr.projects.epam.com',
            // pathRewrite: {'^/api' : '/'}
        }
    }
};
