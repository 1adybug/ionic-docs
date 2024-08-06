import _fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';

const agent = new HttpsProxyAgent('http://172.26.176.1:7890');

export function fetch(url, options) {
  options ??= {};
  options.agent = agent;
  return _fetch(url, options);
}
