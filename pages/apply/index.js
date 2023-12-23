import Container from "../../componnent/Container";

export default function ApplyForm() {
    return (
        <main className="f-fit py-40 pb-52">
            <Container>
                <h1 className="text-3xl font-bold pcolor text-center pb-8">Apply Form</h1>
                <div className="w-full sm:w-96 m-auto border border-gray-300 rounded-md p-5 bg-gray-100">

                    <div className="my-4">
                        <p className="text-sm text-gray-600">Frist Name :</p>
                        <input className="border border-gray-200 w-full rounded-md py-1 px-2" type="text" />
                    </div>
                    <div className="my-4">
                        <p className="text-sm text-gray-600">Sure Name :</p>
                        <input className="border border-gray-200 w-full rounded-md py-1 px-2" type="text" />
                    </div>

                    <div className="my-4">
                        <p className="text-sm text-gray-600">Phone Number :</p>
                        <input className="border border-gray-200 w-full rounded-md py-1 px-2" type="text" />
                    </div>

                    <div className="my-4">
                        <p className="text-sm text-gray-600">Email address :</p>
                        <input className="border border-gray-200 w-full rounded-md py-1 px-2" type="text" />
                    </div>

                    <div className="my-4">
                        <p className="text-sm text-gray-600">Applying for :</p>
                        <input className="border border-gray-200 w-full rounded-md py-1 px-2" type="text" />
                    </div>
                    <p className="text-sm text-gray-600">
                        I confirm that all the information which I have entered is correct.
                    </p>

                    <div className="w-full mt-5 mb-1">
                        <button className="w-full pbg text-gray-50 text-lg font-semibold py-1 rounded-md text-center">Apply</button>
                    </div>

                </div>
            </Container>
        </main>
    )
}