export default function LiquidEtherWrapper() {
  return (
    <div className="relative w-screen h-screen">
      <LiquidEther className="absolute top-0 left-0 w-full h-full z-10" />
      <div className="relative z-20 flex justify-center items-center h-full">
        <h1 className="text-white text-4xl">Hover over the background</h1>
      </div>
    </div>
  );
}
