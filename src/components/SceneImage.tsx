import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SceneImageProps {
  src: string;
  caption?: string;
  alt?: string;
}

export default function SceneImage({ src, caption, alt }: SceneImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-6">
        <button
          onClick={() => setOpen(true)}
          className="block w-full rounded-lg overflow-hidden border border-[#d4a853]/20 hover:border-[#d4a853]/50 transition-all duration-300 hover:brightness-105 cursor-pointer"
        >
          <img
            src={src}
            alt={alt || caption || 'Scene image'}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </button>
        {caption && (
          <figcaption className="mt-2 text-caption text-[#5a5650] italic text-center">
            {caption}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#9a958c] hover:text-[#d4a853] p-2 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              src={src}
              alt={alt || caption || 'Scene image'}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
