import uid from 'uid';
import md5 from 'md5';

export function generateUDID(username) {
  const uniqId = `${uid(16)}${username}`;
  const hash = md5(uniqId);
  let udid = '';
  const min = Math.ceil(0);
  const max = Math.floor(hash.length - 1);
  for (let i = 0; i < 16; i += 1) {
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    udid += hash[randomValue];
  }

  return udid.toUpperCase();
}
