export class App {
  configureRouter(config, router) {
    config.title = 'BU - MET CS651';
    config.map([
      { route: ['', 'word-count'],  name: 'word-count', moduleId: 'word-count', nav: true, title: 'Word Count' }
    ]);

    this.router = router;
  }
}
