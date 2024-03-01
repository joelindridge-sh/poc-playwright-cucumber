module.exports = {

    default: {
        // Allows TypeScript
        requireModule: [
            "ts-node/register"
        ],
        require: [
            "playwright/**/*.ts"
        ],
    
        // Test paths
        paths: [
            'playwright/tests/**/*.feature'
        ],
    
        // Reports
        format: [
            'json:reports/cucumber-report.json',
            'html:reports/cucumber-report.html'
        ],
    
        // Run tests in parallel
        // parallel: 2,
    
        // Global parameters
        // worldParameters: { 
        //     appUrl: 'http://localhost:3000/' 
        // },
    }
    
}