import Vue from './core/vue';

const $root = document.querySelector('#root');

$root.textContent = `
  <div>{{ name }}</div> 
  <div>{{ message }}</div>
`;

new Vue({
  el: '#root',
  data: {
    name: '여러분',
    message: '안녕하세요!',
  },
});
