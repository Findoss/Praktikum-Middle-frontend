/**
 * Весь закомментированный код оставлен на будущую реализацию обращения к API сервиса
 */

// import { API_URL } from '../constants';
// import { http, IHttpResponse } from '../utils/http';

import { TChannelsList, TUserId } from '../types';

import testChannels from './static/channels.json';

export const getChannels = async (userId: TUserId): Promise<TChannelsList> => {
  // let data: IHttpResponse<any>;
  try {
    // data = await http<any>(
    //   `${API_URL}/chennals`
    // );
    // return data;
    return testChannels;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {
  getChannels,
};
