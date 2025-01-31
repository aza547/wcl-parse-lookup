import ParticleBackground from "../Components/ParticleBackground";
import { Head } from "@inertiajs/react";

export default function Error() {
    return (
        <>
            <Head title="Oh Noes!" />
            <ParticleBackground />
            <div className="flex items-center justify-center h-screen gap-4">
                <div className="z-10 text-white">
                    Oops, something went wrong, you probably made a typo.
                </div>
            </div>
        </>
    );
}
