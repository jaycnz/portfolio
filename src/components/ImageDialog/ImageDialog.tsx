import TiltedCard from '@/components/TiltedCard/TiltedCard';

interface ImageDialogProps {
  image: string | null;
  onClose: () => void;
}

export function ImageDialog({ image, onClose }: ImageDialogProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 flex flex-col items-center justify-center z-50"
      onClick={onClose}
    >
      <TiltedCard
        imageSrc={image}
        altText="Inspected"
        containerWidth="80vw"
        containerHeight="80vh"
        imageWidth="100%"
        imageHeight="100%"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={true}
        showTooltip={false}
        displayOverlayContent={false}
      />

      <p
        className="mt-4 text-sm text-white/70 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        Click anywhere outside the image to close
      </p>
    </div>
  );
}