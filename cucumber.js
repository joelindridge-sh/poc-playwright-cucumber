module.exports = {
  default: {
    // Allows TypeScript
    requireModule: ["ts-node/register"],
    require: ["playwright/**/*.ts"],

    // Test paths
    paths: ["playwright/tests/**/*.feature"],

    // Reports
    format: ["html:playwright/reports/cucumber-report.html"],
  },
};
