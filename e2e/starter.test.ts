describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Adding ToDo Item should work!', async () => {
    const text = 'a new ToDo Item';

    await element(by.id('add-todo-input')).tap(); // 키보드 활성화
    await element(by.id('add-todo-input')).typeText(text);
    await element(by.id('add-todo-button')).tap();
    await expect(
      element(by.text(text).withAncestor(by.id('todo-list'))),
    ).toBeVisible();
  });

  it('Completing ToDo Item should work!', async () => {
    const text = 'a new ToDo Item';

    await element(by.id('add-todo-input')).tap(); // 키보드 활성화
    await element(by.id('add-todo-input')).typeText(text);
    await element(by.id('add-todo-button')).tap();

    await element(by.id('todo-item-complete-button')).multiTap(5); // tap 이벤트가 막히는 현상이 있어서 multiTap 으로 변경
    await expect(
      element(
        by
          .id('todo-completed')
          .and(by.text(text))
          .withAncestor(by.id('todo-list')),
      ),
    ).toBeVisible();
  });
});
