import * as request from 'request-promise-native';
import * as util from 'util';

exports.handler = async (event: any, context: any, callback: Function) => {
  const headers = {
    'User-Agent': 'lambda-sample'
  };
  const body = {
  }
  const options = {
    url: 'https://api.github.com/users/naokinkfj',
    method: 'GET',
    headers: headers,
    json: true,
    form: body
  };

  const response = await request(options).catch( error => {
    console.error(`error: ${error}`);
  });

  console.log(`response: ${util.inspect(response)}`);
}
