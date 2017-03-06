import { NotesPagePage } from './app.po';

describe('notes-page App', () => {
  let page: NotesPagePage;

  beforeEach(() => {
    page = new NotesPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
