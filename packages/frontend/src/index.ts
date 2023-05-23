import Vue from './core/vue';

const $root = document.querySelector('#root');

$root.textContent = '{{ message }}';

new Vue({
  el: '#root',
  data: {
    message: '안녕하세요 Vue!',
  },
});
