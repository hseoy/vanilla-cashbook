import { screen } from '@testing-library/dom';

import Vue from './vue';

//// TODO: 아직 테스트 실패함.
function render(markup: string, targetId = 'root') {
  const element = window.document.createElement('div');
  element.id = targetId;
  element.innerHTML = markup;
  document.body.appendChild(element);
}

describe('data 맵핑 테스트', () => {
  test('DOM 요소의 content에 "{{ $value }}"가 있다면 data 매개변수에서 $value를 찾아 매핑해줘야 합니다.', () => {
    render(`
        <div data-testid="name">{{ name }}</div>
        <div data-testid="message">{{ message }}</div>
    `);

    new Vue({
      el: '#root',
      data: {
        name: '여러분',
        message: '안녕하세요!',
      },
    });

    expect(screen.queryByTestId('name')).toHaveTextContent('여러분');
    expect(screen.queryByTestId('message')).toHaveTextContent('안녕하세요!');
  });
});
