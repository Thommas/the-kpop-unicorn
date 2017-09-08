/**
 * The Kpop Unicorn
 *
 * Service - Node API
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import axios from 'axios';

class NodeApiService {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_NODE_API_URL
    });
  }

  getData(url) {
    return this.instance.get(url)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        // TODO: Log error somewhere
        throw error;
      });
  }
}
export default NodeApiService;
