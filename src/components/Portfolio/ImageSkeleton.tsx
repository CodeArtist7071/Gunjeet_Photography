export const ImageSkeleton = () => {
  return (
    <div role="status" className="animate-pulse columns-2 gap-4 px-6">
      <div className="w-full h-50 bg-white/10 rounded-xl mb-4"></div>
      <div className="w-full h-50 bg-white/10 rounded-xl mb-4"></div>
      <div className="w-full h-50 bg-white/10 rounded-xl mb-4"></div>
      <div className="w-full h-50 bg-white/10 rounded-xl mb-4"></div>
    </div>
  );
};
