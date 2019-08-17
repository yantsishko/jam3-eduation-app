import req from 'superagent';
import config from './config';

let apiBasePath = config.apiBasePath;
let ksToken = null;

const routeMap = {
  dms: '/configurations/action/serveByDevice',
  categories: '/ottcategory/action/get',
  assets: '/asset/action/list',
  singleAsset: 'asset/action/get',
  anonymousLogin: '/ottUser/action/anonymousLogin',
  refreshToken: '/ottUser/action/refreshSession',
  login: '/ottUser/action/login',
  logout: '/ottUser/action/logout',
  epg: 'asset/action/list',
  register: '/ottUser/action/register',
  favourites: '/favorite/action/list',
  putFavourites: '/favorite/action/add',
  deleteFavourites: '/favorite/action/delete',
  getUserData: '/ottUser/action/get',
  getDevices: '/householddevice/action/list',
  getHousehold: '/household/action/get',
  deleteDevice: '/householddevice/action/delete',
  addDevice: '/householddevice/action/add',
  updateDevice: '/householddevice/action/update',
  getAssetContext: 'asset/action/getPlaybackContext',
  subscriptions: 'subscription/action/list',
  entitlement: 'entitlement/action/list',
  serverTime: 'system/action/getTime',
  updateUser: 'ottuser/action/update',
  updatePin: '/pin/action/update',
  validatePin: '/pin/action/validate',
  getPin: '/pin/action/get',
  subscriptionset: '/subscriptionset/action/list',
  cancelRenewal: 'entitlement/action/cancelRenewal',
  payments: 'householdpaymentgateway/action/invoke',
  history: 'transactionhistory/action/list',
  adapter: 'paymentgateway/action/list',
  userrole: 'userrole/action/list',
};

const KS_SESSION_TOKEN = 'ksSessionToken';

export const setTokens = (sessionToken) => {
  if (sessionToken) {
    localStorage.setItem(KS_SESSION_TOKEN, sessionToken);
    ksToken = sessionToken;
  }
};

export const sendRequest = (routeName, method = 'get', { data } = {}) => {
  const rqst = req[method]((routeName in routeMap) ? apiBasePath + routeMap[routeName] : routeName)
    .set('Content-type', 'application/json')
    .set('Accept', 'application/json');
  if (data) {
    if (method === 'get') {
      rqst
        .query(data);
    }
    if (method === 'post' || method === 'put') {
      rqst
        .send(data);
    }
  }
  return new Promise((resolve, reject) => {
    rqst
      .end((err, response) => {
        if (err) {
          reject(response.body);
        } else {
          resolve(response.body);
        }
      });
  });
};

function getKSToken() {
  return new Promise((resolve, reject) => {
    if (ksToken) {
      resolve(ksToken);
    } else if (localStorage.getItem(KS_SESSION_TOKEN)) {
      ksToken = localStorage.getItem(KS_SESSION_TOKEN);
      resolve(ksToken);
    }
  });
}

export const sendApiRequest = (routeName, method = 'get', { data = {}, params, limit = null, offset = 0 } = {}) => {
  const dataValue = data;

  return getKSToken()
    .then(() => {
      dataValue.ks = ksToken;

      return sendRequest(routeName, method, { data, params });
    });
};

