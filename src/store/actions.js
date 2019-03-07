import {
  reqHomeHotSearch,
  reqHomeCates,
  reqHomeCateList,
  reqHomeAdv,
  reqHomeHotProducts,
  reqHomeFlashShop,
  reqProductInfo,
  reqCartAdd
} from '../api'

import {
  RECEIVE_HOME_HOT_SEARCH,
  RECEIVE_HOME_CATES,
  RECEIVE_HOME_CATELIST,
  RECEIVE_HOME_ADV,
  RECEIVE_HOME_HOTPRODUCTS,
  RECEIVE_HOME_FLASHSHOP,
  RECEIVE_PRODUCT_INFO
} from './mutation-type'

export default {

  async getHotSearch({commit}) {
    const result = await reqHomeHotSearch()
    if (!result.code) {
      commit(RECEIVE_HOME_HOT_SEARCH, result.data)
    }
  },
  async getHomeCates({commit}) {
    const result = await reqHomeCates()
    if (!result.code) {
      commit(RECEIVE_HOME_CATES, result.data)
    }
  },
  async getHomeCateList({commit},{id,curIndex}) {
    const result = await reqHomeCateList(id)
    if (!result.code) {
      commit(RECEIVE_HOME_CATELIST, {subs:result.data,curIndex})
    }
  },
  async getHomeAdv({commit},cb) {
    const result = await reqHomeAdv()
    if (!result.code) {
      commit(RECEIVE_HOME_ADV,result.data);
      typeof cb=="function"&&cb();
    }
  },
  async getHomeHotProducts({commit}) {
    const result = await reqHomeHotProducts()
    if (!result.code) {
      commit(RECEIVE_HOME_HOTPRODUCTS,result.data);
    }
  },
  async getHomeFlashShop({commit}) {
    const result = await reqHomeFlashShop()
    if (!result.code) {
      commit(RECEIVE_HOME_FLASHSHOP,result.data);
    }
  },

  async getProductDetail({commit}, {id,cb}) {
    const result = await reqProductInfo(id);
    if (!result.code) {
      commit(RECEIVE_PRODUCT_INFO, result.data);
      typeof cb=="function"&&cb();
    }
  },

  async getCartAdd({commit}, {id,count,cb}) {
    const result = await reqCartAdd({id,count});
    if (!result.code) {
      typeof cb=="function"&&cb();
    }
  },

  // async search({commit}, searchWord) {
  //   const result = await reqSearch(searchWord)
  //   if (!result.code) {
  //     commit(RECEIVE_SEARCH, result.data)
  //   }
  // },
  //
  // async register({commit}, data) {
  //   const result = await reqRegister(data)
  //   //发送注册用户请求
  //   if (result.code === 0) {
  //     commit(RECEIVE_USER, result.data)
  //   }
  // },
  //
  // async login({commit}, {username, password, code, isLogin}) {
  //   const result = await reqLogin({username, password, code})
  //   if (!result.code) {
  //     commit(RECEIVE_USER, result.data)
  //     isLogin()
  //   }
  // },

  // async getOrders({state, commit}) {
  //   const result = await reqOrders({id: state.user.id})
  //   if (result.code === 0) {
  //     commit(RECEIVE_ORDERS, result.data)
  //   }
  // }
}
