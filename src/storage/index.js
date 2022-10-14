// 这是一个数据存储的工具箱，比如，存储值、删除值等

// Storage封装，使用es6规范

// 定义key
const STORAGE_KEY = 'mall'
export default{
  // 存储值

  // 设置模块
  // eslint-disable-next-line camelcase
  setItem (key, value, module_name) {
    // eslint-disable-next-line camelcase
    if (module_name) {
      // 拿到user对象
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的属性，比如user下面的username
  // eslint-disable-next-line camelcase
  getItem (key, module_name) {
    // eslint-disable-next-line camelcase
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    // 获取user
    return this.getStorage()[key]
  },
  // 获取整个浏览器中的缓存信息数据
  getStorage () {
    // api
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清空某一个值
  // eslint-disable-next-line camelcase
  clear (key, module_name) {
    let val = this.getStorage()
    // eslint-disable-next-line camelcase
    if (module_name) {
      // 删除模块下面的某一个属性
      delete val[module_name][key]
    } else {
      // 如果没有属性，则直接将其删除
      delete val[key]
    }
    // 删除之后，要将值重新写进去
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
