# aws-process-env
This NPM module helps you fetch data from AWS parameter store and assign it to Process.env variable

## Installation 
### Install via npm 
npm install aws-prcoess-env

## Getting Started
- This module is most helpful when your program is using Parameter store to store environment variables and you need all variables available synchronously as soon as program starts.
- Module will fetch all parameters and will store in Process.env variable.
- It also supports cascading
- You can call this module in main thread.




