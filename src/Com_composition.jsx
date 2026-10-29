const Header = () => (
  <header>
    <h1>Welcome</h1>
  </header>
);

const Content = () => (
  <main>
    <p>This is main</p>
  </main>
);

const Footer = () => (
  <footer>
    <p>@2026</p>
  </footer>
);

export function Com_composition() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
