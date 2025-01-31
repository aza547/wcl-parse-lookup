import ParticleBackground from '../Components/ParticleBackground';

export default function Error() {
  return (
    <>
      <ParticleBackground />
      <div className="flex items-center justify-center h-screen gap-4">
        <div className="z-10 text-white">
          Oops, something went wrong, sucks to be you. You probably made a typo.
        </div>
      </div>
    </>
  );
}
