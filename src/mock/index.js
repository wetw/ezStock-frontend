import axios from 'axios';
import data from './data';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios, { delayResponse: 80 });

mock.onGet('/users').reply(200, {
  data: data.users.slice(0, 10)
});

export default mock;

