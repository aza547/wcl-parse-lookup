import ParticleBackground from "../Components/ParticleBackground";
import Content from "@/Components/Content";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Parsearch" />
            <ParticleBackground />
            <Content />
        </>
    );
}
