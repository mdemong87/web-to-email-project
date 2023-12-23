import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Container from "../../componnent/Container";

export default function Contact() {
    return (
        <main className="f-fit py-40 pb-52">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="w-full h-fit pb-8 md:pb-0">
                        <p className="pcolor">Get in touch</p>
                        <h1 className="text-3xl font-semibold text-gray-700 py-5">Do not hesitate to contact us for more information.</h1>
                        <p className="pb-9 text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="border-t-2 border-gray-300">
                            <div className="flex gap-3 items-start pt-5">
                                <div>
                                    <FaLocationDot className="text-4xl pcolor" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-gray-700">Head Office</h3>
                                    <p className="text-gray-500 pt-1">Jalan Cempaka Wangi No 22</p>
                                    <p className="text-gray-500">Jakarta - Indonesia</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start pt-5">
                                <div>
                                    <MdEmail className="text-4xl pcolor" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-gray-700">Email us</h3>
                                    <p className="text-gray-500 pt-1">support@yourdomain.tld</p>
                                    <p className="text-gray-500">hello@yourdomain.tld</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start pt-5">
                                <div>
                                    <IoCall className="text-4xl pcolor" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-gray-700">Call us</h3>
                                    <p className="text-gray-500 pt-1">Phone : +6221.2002.2012</p>
                                    <p className="text-gray-500">Fax : +6221.2002.2013</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <iframe className={`w-full h-96 rounded-lg`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63426.743131602554!2d-2.467705835577703!3d53.78752181633135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9c1723698fc7%3A0x9cacec51e83f64b3!2sBillington%2C%20UK!5e0!3m2!1sen!2sus!4v1703257737710!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Container>
        </main>
    )
}