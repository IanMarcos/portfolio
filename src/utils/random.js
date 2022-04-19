
const shuffleString = string => {
  if(typeof(string) !== 'string'){
    console.error('String expected');
  }
  
  let list = string.split("");
  const n = list.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
  return list.join("");
}

module.exports = {
  shuffleString
};
