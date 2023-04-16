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
});
