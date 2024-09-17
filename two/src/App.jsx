import About from "./component/about/About";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Program from "./component/program/Program";
import Title from "./component/title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="Our Program" title="What we Offer"/>
        <Program />

        <About />
      </div>
    </div>
  );
};
export default App;
