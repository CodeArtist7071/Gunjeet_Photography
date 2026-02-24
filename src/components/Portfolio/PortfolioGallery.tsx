import { ArrowLeftCircle, X, XCircleIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchFolders, fetchImagesById } from "../../hooks/events";
import { API_KEY, GOOGLE_API } from "../../constants/apis";
import { ImageSkeleton } from "./ImageSkeleton";
import ScrollToTop from "../../utils/ScrollToTop";

const PortfolioGallery = ({ navigate }: { navigate: any }) => {
  const [folders, setFolders] = useState<any>([]);
  const [imageFiles, setImageFiles] = useState<any>([]);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [categoryLoading, setCategoryLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(
    folders?.[0]?.name,
  );

  useEffect(() => {
    const loadFolders = async () => {
      setCategoryLoading(true);
      setImageLoading(true);
      const data = await fetchFolders();
      setFolders(data);
      setCategoryLoading(false);
      const response = await fetchImagesById(data[0].id);
      const imgData = await response;
      setImageFiles(imgData?.files);
      setImageLoading(false);
      if (data?.length > 0) {
        setSelectedCategory(data[0].name);
      }
      console.log(data);
    };
    loadFolders();
    setImageLoading(false);
    setCategoryLoading(false);
  }, []);

  async function handlePress(category: any) {
    setImageLoading(true);
    console.log("category", category);
    setSelectedCategory(category.name);
    try {
      const response = await fetchImagesById(category.id);
      const data = await response;
      // console.log(data);
      if (data.files) {
        setImageFiles(data.files);
        setImageLoading(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setImageLoading(false);
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
  }
  return (
    <div
      id="portfolio-m"
      className=" text-slate-900 dark:text-slate-100 font-display flex flex-col overflow-x-hidden"
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6 w-full fixed top-0 left-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <a
          href="#"
          className="flex items-center gap-2 text-primary group transition-all"
        >
          <ArrowLeftCircle
            size={35}
            color="white"
            onClick={() => navigate(-1)}
          />
        </a>
        <h1 className="text-sm font-bold tracking-widest uppercase">
          Portfolio
        </h1>
      </header>

      {/* Main Title */}
      <div className="px-4 pb-4 pt-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
          Art of Works
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-8">
          A curated collection of monochrome street photography and
          architectural shadows.
        </p>
      </div>
      {categoryLoading ? (
        <div role="status" className="animate-pulse flex px-6 gap-3 relative">
          <div className="w-30 h-7 bg-white/90 rounded-full mb-4 "></div>
          <div className="w-30 h-7 bg-white/90 rounded-full mb-4 "></div>
          <div className="w-30 h-7 bg-white/90 rounded-full mb-4 "></div>
        </div>
      ) : (
        <div className="pb-6 overflow-x-auto no-scrollbar">
          <div className="flex px-4 gap-3 relative">
            {folders.map((category: any) => {
              const isActive = selectedCategory === category.name;

              return (
                <button
                  key={category.id}
                  onClick={() => handlePress(category)}
                  className="relative px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {imageLoading ? <ImageSkeleton /> : <Gallery files={imageFiles} />}
      {/* Footer */}
      <div className="mt-12 text-center mb-24">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">
          End of Gallery
        </p>
        <button onClick={()=>scrollToTop()} className="cursor-pointer text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
          Back to Top
        </button>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 z-40 active:scale-95 transition-transform">
        <span className="material-symbols-outlined">tune</span>
      </button>
    </div>
  );
};

export default PortfolioGallery;
{
  /* Bottom Nav */
}
{
  /*<nav className="fixed bottom-0 w-full bg-background-light dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800">
  <div className="flex items-center justify-around h-16 px-6">
    {["home", "grid_view", "person", "chat_bubble"].map((icon, idx) => (
      <a
        key={idx}
        href="#"
        className={`flex flex-col items-center gap-1 ${idx === 1 ? "text-primary" : "text-slate-400 hover:text-primary transition-colors"}`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </a>
    ))}
  </div>
</nav>*/
}

const Gallery = ({ files }: any) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  return (
    <div className="columns-2 gap-4 px-6 md:hidden">
      <AnimatePresence mode="popLayout">
        {files.map((item: any) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedImage(item.id)}
            className="group relative overflow-hidden rounded-lg mb-4 break-inside-avoid"
          >
            <motion.img
              layoutId={`image-${item.id}`}
              src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1000`}
              className="w-full rounded-lg"
              initial={{ opacity: 1, transitionDuration: 0.5 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ aspectRatio: item.aspect }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] text-white/70 uppercase tracking-widest">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={`image-${selectedImage}`}
              src={`https://drive.google.com/thumbnail?id=${selectedImage}&sz=w1000`}
              className="w-full rounded-lg"
              style={{ aspectRatio: selectedImage.aspect }}
            />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              <XCircleIcon size={34} color="white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
