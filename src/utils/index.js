/* eslint-disable */
const storage = localStorage; // sessionStorage

export const saveItem = (key, value) => {
  try {
    value = JSON.stringify(value);
  } catch (error) {
    //
    console.error(error);
  }
  storage.setItem(key, value);
};

export const getItem = (key, defaultValue) => {
  let result = storage.getItem(key);
  if (result === null) {
    result = defaultValue;
  } else {
    try {
      result = JSON.parse(result);
    } catch (error) {
      console.error(error);
    }
  }
  return result;
};

export const clearItems = () => {
  storage.clear();
};

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

export function formateTimeSpace(timeStamp) {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // const halfamonth = day * 15;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - timeStamp;
  if (diffValue < 0) {
    return;
  }
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  let result;
  if (monthC >= 1) {
    result = `${parseInt(monthC, 10)}月前`;
  } else if (weekC >= 1) {
    result = `${parseInt(weekC, 10)}周前`;
  } else if (dayC >= 1) {
    result = `${parseInt(dayC, 10)}天前`;
  } else if (hourC >= 1) {
    result = `${parseInt(hourC, 10)}小时前`;
  } else if (minC >= 1) {
    result = `${parseInt(minC, 10)}分钟前`;
  } else {
    result = '刚刚';
  }
  return result;
}

export function formateDuration(duration) {
  if (parseInt(duration, 10) === 0) {
    return '0.000ms';
  }
  if (parseInt(duration, 10) >= 1000000) {
    return `${(parseInt(duration, 10) / 1000000).toFixed(3)}s`;
  }
  if (parseInt(duration, 10) >= 1000) {
    return `${(parseInt(duration, 10) / 1000).toFixed(3)}ms`;
  }
  return `${duration.toFixed(3)} μs`;
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });
