import { TimeoutSec } from './config';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, recipe = undefined) {
  try {
    const fetchData = recipe
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
        })
      : fetch(url);
    const response = await Promise.race([fetchData, timeout(TimeoutSec)]);
    if (!response.ok) throw new Error(`${response.message} ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
