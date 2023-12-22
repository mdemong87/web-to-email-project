import Container from "../../componnent/Container";
import SingleJobsCard from "../../componnent/SingleJobsCard";


export default function () {
    return (
        <main className="f-fit py-40 pb-52">
            <Container>
                <div>
                    <h1 className="text-3xl font-bold pcolor text-center pb-20">Latest Job Listing</h1>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <SingleJobsCard />
                        <SingleJobsCard />
                        <SingleJobsCard />
                        <SingleJobsCard />
                        <SingleJobsCard />
                        <SingleJobsCard />
                    </div>
                </div>
            </Container>
        </main>
    )
}