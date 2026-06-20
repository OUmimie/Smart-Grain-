import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn, FiPlay } from "react-icons/fi";
import { galleryItems, galleryCategories } from "../data/gallery";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="galerie" className="section-padding" style={{background: 'rgba(6,13,31,0.65)'}}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Galerie"
          title="Immersion Industrielle"
          subtitle="Explorez nos installations, matières premières et produits finis à travers une sélection de visuels et vidéos."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "glass text-blue-200 hover:bg-blue-500/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? "h-80 sm:h-full min-h-[320px]" : "h-56"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-sky-200/70 text-sm capitalize">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.type === "video" ? (
                    <FiPlay className="text-sky-300" />
                  ) : (
                    <FiZoomIn className="text-sky-300" />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-blue-950/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white hover:text-sky-300 transition-colors"
                aria-label="Fermer"
              >
                <FiX size={28} />
              </button>

              {lightbox.type === "video" ? (
                <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                  <iframe
                    src={lightbox.videoUrl}
                    title={lightbox.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              )}
              <p className="text-white text-center mt-4 font-medium">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
