import AboutFutured from '../componnent/AboutFutured';
import FuturedWrper from '../componnent/FuturedWrper';
import Hero from '../componnent/Hero';
import JoinCommunity from '../componnent/JoinCommunity';
import aboutOne from "../public/about.png";
import aboutTwo from "../public/aboutTwo.png";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={`${styles.homepage}`}>
      <Hero />
      <FuturedWrper />

      <AboutFutured lSide={true} image={aboutOne} into={'Who we are'} heading={"Here’s to growth and happiness in every person's career journey"} dis={'Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar.'} text="Discover More" links={"/"} />

      <JoinCommunity />

      <div className='py-20'>
        <AboutFutured lSide={false} image={aboutTwo} into={'Our Service'} heading={"Bridge for industrial and corporate development."} dis={'Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar.'} text="Discover More" links={"/"} />
      </div>
    </main>
  )
}
