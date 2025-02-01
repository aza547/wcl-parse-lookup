import ParticleBackground from "../Components/ParticleBackground";
import { Head } from "@inertiajs/react";

export default function Error() {
    return (
        <>
            <Head title="Oh Noes!" />
            <ParticleBackground />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="z-10 text-white text-lg my-1">
                    Oops! I&apos;ve made a parse of it!
                </h1>
                <p className="z-10 text-white text-sm">
                    Likely the character did not exist, had no recent parses, or
                    you made a typo.
                </p>
            </div>
        </>
    );
}
