import { FaMagento } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import AboutFutured from "../../componnent/AboutFutured";
import Container from "../../componnent/Container";
import Futured from "../../componnent/Futurede";
import JoinCommunity from "../../componnent/JoinCommunity";
import aboutOne from "../../public/about.png";


export default function About() {
    return (
        <main>
            <div className="pt-10">
                <AboutFutured lSide={true} image={aboutOne} into={'Who we are'} heading={"Here’s to growth and happiness in every person's career journey"} dis={'Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar.'} text="Discover More" links={"/"} />
            </div>




            <div className="bg-gray-100 py-16">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="w-full h-full">
                            <p className="pcolor">Our Value</p>
                            <h1 className="text-3xl font-semibold text-gray-700 py-5">
                                Recruitment company work with effectiveness.
                            </h1>
                            <p className="pb-9 text-lg text-gray-400">
                                Ligula leo ipsum aliquam sem vel fames feugiat consequat platea nec placerat. Bibendum pulvinar taciti dignissim at tempor conubia placerat arcu cursus.

                            </p>
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 h-full">

                            <Futured icons={<FaMagento className="text-5xl pcolor" />} heading={'Our Vision'} dis={"Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si"} bg={false} />

                            <Futured icons={<TbUsersGroup className="text-5xl pcolor" />} heading={'Our Mission'} dis={"Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si"} bg={false} />

                        </div>
                    </div>
                </Container>
            </div>

            <JoinCommunity />

            <div className="my-40 h-72">sddsgdsfg</div>
        </main>
    )
}