import About from "./about";
import Header from "./header";
import Hero from "./hero";
import Layout from "./layout";
import Services from "./services";


const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Services />
    </Layout>
  );
};

export default App;
