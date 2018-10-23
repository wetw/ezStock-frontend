import axios from 'axios';
import data from './data';
import MockAdapter from 'axios-mock-adapter';
import stocks from './stocks.json';

let mock = new MockAdapter(axios, {
  delayResponse: 80
});

mock.onGet('/users').reply(200, {
  data: data.users.slice(0, 10)
});

mock.onGet('/stocks').reply(200, {
  data: stocks
});

mock.onGet(/\/stocks\/\w+/).reply((config) => {
  return [200, {
    data: stocks.find(x => x.id === config.url.split('/')[1])
  }];
});

export default mock;
