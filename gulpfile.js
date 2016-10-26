

var options = {
  mainAngularModule: 'testelacosfloresFront'
};


options.modulesData = {
  proxy: {
    proxyRules: {
      rules: {},
      default: 'http://localhost:9000'
    }
  },

  unitTests: {
    testAutoConfig: {
      suppressCoverage: true
    }
  },

  scripts: {
    coffee: {
      sourcemaps: {
        active: false
      }
    }
  }
};

require('basebuild-angular')(options);