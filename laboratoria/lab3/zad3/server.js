const Sciezki = require('./Sciezki');

const PORT = 3000;

const app = new Sciezki();

const page1Content = `
  <html>
    <head><title>Strona 1</title></head>
    <body>
      <h1>Witaj na stronie TESTOWE 1</h1>
      <p>Testowa strona</p>
      <a href="/">Wróć do strony głównej</a>
    </body>
  </html>
`;

const page2Content = `
  <html>
    <head><title>Strona 2</title></head>
    <body>
      <h1>Strona TESTOWA 2</h1>
      <p>Testowa strona</p>
      <a href="/">Wróć do strony głównej</a>
    </body>
  </html>
`;

const page3Content = `
  <html>
    <head><title>Strona 3</title></head>
    <body>
      <h1>To jest strona TESTOWA 3</h1>
      <p>Testowa strona</p>
      <a href="/">Wróć do strony głównej</a>
    </body>
  </html>
`;

app.addRoute('/testowe1', page1Content);
app.addRoute('/testowe2', page2Content);
app.addRoute('/testowe3', page3Content);

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony! Wejdź na http://localhost:${PORT}`);
});