const characters = 'abcdefghijklmnopqrstuvwxyz';
const charactersLength = characters.length;

export default function makeID(length: number) {
  let result = '';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
