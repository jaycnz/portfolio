import Lanyard from "../../components/Lanyard/Lanyard";
// Pass custom images for the card's front/back faces and/or the lanyard band.
// frontImage and backImage render independently; imageFit keeps aspect ratio.
// lanyardWidth widens the band so a custom band image has more room.
export function Main() {
  return (
    <div className="relative min-h-screen">
      {/* Doesn't affect layout */}
      <div className="fixed inset-0 z-50">
        <Lanyard
          position={[0, 0, 24]}
          gravity={[0, -40, 0]}
          frontImage="/lanyard/my-front2.png"
          backImage="/lanyard/my-back.png"
          lanyardImage="/lanyard/band4.png"
          imageFit="contain"
          lanyardWidth={0.8}
        />
      </div>

      {/* Normal page content */}
      <main className="page-container relative z-10">
        <h1>Main Page YES!</h1>
        <p>Lots of content...</p>
      </main>
    </div>
  );
}

