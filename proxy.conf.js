
const proxy = [
  {
    context: '/api',
    target:'https://pokeapi.co/',
    secure:false,
    changeOrigin:true
  }
];
module.exports = proxy;