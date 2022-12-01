import { Footer, Navbar } from '../components';
import { About } from '../sections';
import { Hero } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
    </div>
  </div>
);

export default Page;
