import Button from "../componnent/Button";


export default function SingleBanner({ sl }) {
    return (
        <div className={`h-screen ${sl == "1" ? "oneBg" : sl == "2" ? "twoBg" : "threeBg"}`}>
            <div className="flex h-screen items-center justify-center">
                <div className="w-2/4">
                    <h1 className="text-white text-5xl text-center font-light">
                        Looking for a career change?<br /> Browse our job listings now!
                    </h1>
                    <p className="py-8 text-gray-300 text-center">Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis quisque orci pretium donec elit platea porta integer maecenas risus lobortis.</p>

                    <div className="flex justify-center">
                        <Button link={"/"} text="Discover Jobs" />
                    </div>
                </div>
            </div>
        </div>
    )
}