import webpack from 'webpack'
const webpackConfig = require('../webpack.config.prod') // eslint-disable-line no-unused-vars
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

console.log(chalk.blue('generating minified bundle for production. This will take a moment...')); // eslint-disable-line no-console

webpack(webpackConfig).run(function(err, stats){ // eslint-disable-line no-unused-vars
  if(err){ // so a fatal error occured, Stop here
    console.log(chalk.red(err)) // eslint-disable-line no-console
    return 1
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error))) // eslint-disable-line no-console
  }

  if(jsonStats.hasWarnings){
    console.log(chalk.yellow(' Webpack generated the following warnings: ')); // eslint-disable-line no-console
    jsonStats.warnings.map((warning)=>{console.log(chalk.yellow(warning))}) // eslint-disable-line no-console
  }

  // build success if here
  console.log(chalk.green('Your app has been build for production and written to /dist')) // eslint-disable-line no-console

  return 0
});
