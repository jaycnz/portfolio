import TiltedCard from '@/components/TiltedCard/TiltedCard';

interface ImageDialogProps {
  image: string | null;
  onClose: () => void;
}

export function ImageDialog({ image, onClose }: ImageDialogProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Dialog container */}
      <div
        className="relative w-[80vw] max-w-5xl h-[80vh] bg-transparent flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
        >
          ✕
        </button>

        {/* Tilted card */}
        <TiltedCard
          imageSrc={image}
          altText="Inspected"
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={5}      // lower for large images
          scaleOnHover={1.05}
          showMobileWarning={true}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>
    </div>
  );
}
