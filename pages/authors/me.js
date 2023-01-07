import Link from "next/link";

export default function Me() {
    return (
        <main>
            <h1>About Me</h1>
            <h2>Education</h2>
            <h2>
               <Link href="/">Back To Home</Link>
            </h2>

            <div>
                <p>
                    Public directory will be used to hold static assets
                </p>

                <p>
                    also, They can be used for other things
                </p>
            </div>

        </main>
    )
}
