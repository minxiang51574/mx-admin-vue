/**
 * Gets the browser information.
 *
 * @param      {string}  userAgent  The userAgent
 * @return     {<type>}  The browser information.
 */
export const getBrowserInfo = userAgent => {
  let browser = {},
    matched = (function (ua) {
      const match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        ///(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        ///version[\/][\d.]+.*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /version[\/]([\d.]+).*(safari)[ \/][\w.]+/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        /(firefox)[\/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      if (match[2] === "safari") {
        return {
          browser: match[2] || "",
          version: match[1] || "0"
        };
      }
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    })(userAgent.toLowerCase());
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }
  return browser;
}

/**
 * Determines if support.
 *
 * @param      {<type>}   window    The window
 * @param      {<type>}   document  The document
 * @return     {boolean}  True if support, False otherwise.
 */
export const isSupport = (window, document) => {
  const browserInfo = getBrowserInfo(window.navigator.userAgent)
  const ver = parseInt(browserInfo["version"], 10) || 0
  if ((browserInfo["msie"] && ver < 10) ||
    (browserInfo["chrome"] && ver < 40) ||
    (browserInfo["firefox"] && ver < 40) ||
    (browserInfo["safari"] && ver < 5)) {
    return false
  }
  return true
}
/**
 * { 验证数字 }
 *
 * @param      {<type>}                                   opts    The options
 * @return     {(Function|Object|boolean|number|string)}  {  }
 */
export const validNumber = (opts) => {
  return {
    required: opts.required,
    type: opts.type || 'number',
    min: opts.min || 0,
    message: opts.message || '只能输入数字',
    trigger: opts.trigger || 'change',
    transform(value) {
      value = String(value).trim()
      if (this.required && (value === '' || value === null)) {
        return value
      } else {
        return value >= 0 ? Number(value) : value
      }
    }
  }
}

/**
 * { 基于时间戳生成16位全局唯一标识（每一毫秒只对应一个唯一的标识，适用于生成DOM节点ID） }
 *
 * @return     {(number)}  {      
 * @param {Number} [len] 生成字符串的位数
 * @returns {String}  }
 */
export const uuid = (function () {
  let _timestamp = 0;
  return (len = 16) => {
    let timestamp = new Date().getTime() || 0,
      chars = 'abcdefghijklmnopqrstuvwxyz',
      uuid = '';
    _timestamp = _timestamp == timestamp ? timestamp + 1 : timestamp;
    timestamp = '' + _timestamp;
    for (let i = 0; i < len; i++) {
      let k = timestamp.charAt(i);
      if (k === '') {
        k = Math.floor(Math.random() * 26);
      }
      uuid += chars.charAt(k) || 'x';
    }
    return uuid;
  };
}())

/**
 * { 将时间的空格转换为换行符号 }
 *
 * @param      {<string>}  date    时间字符串
 * @return     {<html>}  { html片段 }
 */
export function formatDateOutput(date) {
  return String(date || '').replace(' ', '<br/>')
}

/**
 * Sets the form data.
 *
 * @param      {<type>}  form    The form
 * @param      {string}  data    The data
 * @return     {<type>}  { description_of_the_return_value }
 */
export const setFormData = (form, data) => {
  form = form || {}
  data = data || {}
  Object.keys(form).forEach(function (key) {
    let val = data[key]
    if (!Array.isArray(val)) {
      form[key] = val == null ? '' : val
    }
  })
}

/**
 * { filtered the empty parameters  }
 *
 * @param      {string}  params        The parameters
 * @param      {<bool>}  excludeEmpty  is filter
 * @return     {<object>}  { parameters }
 */
export const filterParams = (params, excludeEmpty) => {
  var obj = {}
  Object.keys(params).forEach(function (key) {
    params[key] = typeof params[key] == 'string' ? params[key].trim() : params[key]
    if (excludeEmpty) {
      if (params[key] !== '' && params[key] != null) {
        obj[key] = params[key]
      }
    } else {
      obj[key] = params[key]
    }
  })
  return obj
}
