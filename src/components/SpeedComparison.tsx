import { motion } from 'framer-motion';

export function SpeedComparison() {
  return (
    <div className="w-full max-w-md space-y-6">
      {/* Digital8 Card - Fast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle green glow when loaded */}
        <motion.div
          animate={{ opacity: [0, 0.1, 0.1, 0] }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute inset-0 bg-green-500/5 pointer-events-none"
        />
        <div className="flex items-center justify-between mb-4 relative z-10">
          <h3 className="text-lg font-semibold text-white">Digital8 Site</h3>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
          />
        </div>
        
        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden relative z-10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-lg shadow-green-500/30"
            initial={{ width: '5%' }}
            animate={{ width: ['5%', '100%', '100%', '5%'] }}
            transition={{
              duration: 6,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </div>
        
        <motion.p
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="text-sm text-green-400 mt-2 font-medium relative z-10"
        >
          Loaded in 0.6s
        </motion.p>

        {/* Mini Browser - Digital8 (Instant Content) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="mt-4 bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden relative z-10"
        >
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            <div className="flex-1 h-2 bg-white/10 rounded mx-2"></div>
          </div>
          
          {/* Content - Appears instantly */}
          <div className="p-3 space-y-2">
            {/* Image block */}
            <div className="h-16 bg-white/20 rounded"></div>
            {/* Text lines */}
            <div className="space-y-1.5">
              <div className="h-2 bg-white/30 rounded w-full"></div>
              <div className="h-2 bg-white/30 rounded w-5/6"></div>
              <div className="h-2 bg-white/20 rounded w-4/6"></div>
            </div>
            {/* Bottom blocks */}
            <div className="flex gap-2 mt-2">
              <div className="flex-1 h-8 bg-white/15 rounded"></div>
              <div className="flex-1 h-8 bg-white/15 rounded"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Standard Agency Card - Slow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle orange glow when loaded */}
        <motion.div
          animate={{ opacity: [0, 0, 0.1, 0.1, 0] }}
          transition={{
            duration: 6,
            times: [0, 0.5, 0.5, 0.9, 1],
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-orange-500/5 pointer-events-none"
        />
        <div className="flex items-center justify-between mb-4 relative z-10">
          <h3 className="text-lg font-semibold text-white">Standard Agency</h3>
          <div className="relative">
            {/* Spinner - disappears when loading completes */}
            <motion.div
              animate={{
                rotate: [0, 360, 360, 360],
                scale: [1, 1, 0, 0],
                opacity: [1, 1, 0, 0],
              }}
              transition={{
                duration: 6,
                times: [0, 0.5, 0.5, 0.5],
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
            {/* Orange indicator dot - appears when loading completes */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 6,
                times: [0, 0.5, 0.5, 0.9, 1],
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
            />
          </div>
        </div>
        
        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden relative z-10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            initial={{ width: '5%' }}
            animate={{ width: ['5%', '100%', '100%', '5%'] }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.9, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        <div className="relative">
          <motion.p
            animate={{ opacity: [1, 1, 0, 0, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.5, 0.9, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-sm text-gray-400 mt-2 relative z-10"
          >
            Loading...
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.5, 0.9, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-sm text-orange-400 mt-2 font-medium relative z-10"
          >
            Loaded in 3s
          </motion.p>
        </div>

        {/* Mini Browser - Standard Agency (Skeleton Loader) */}
        <div className="mt-4 bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden relative z-10">
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10 relative z-10">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            <div className="flex-1 h-2 bg-white/10 rounded mx-2"></div>
          </div>
          
          {/* Content Area - Relative container for layered content */}
          <div className="relative">
            {/* Skeleton Loader - Shows for first 3s */}
            <motion.div
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{
                duration: 6,
                times: [0, 0.5, 0.5, 0.9, 1],
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="p-3 space-y-2"
            >
              {/* Image skeleton - pulsing */}
              <div className="h-16 bg-white/10 rounded animate-pulse"></div>
              {/* Text lines skeleton */}
              <div className="space-y-1.5">
                <div className="h-2 bg-white/10 rounded w-full animate-pulse"></div>
                <div className="h-2 bg-white/10 rounded w-5/6 animate-pulse"></div>
                <div className="h-2 bg-white/10 rounded w-4/6 animate-pulse"></div>
              </div>
              {/* Bottom blocks skeleton */}
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-8 bg-white/10 rounded animate-pulse"></div>
                <div className="flex-1 h-8 bg-white/10 rounded animate-pulse"></div>
              </div>
            </motion.div>

            {/* Content - Fades in after skeleton */}
            <motion.div
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 6,
                times: [0, 0.5, 0.5, 0.9, 1],
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 p-3 space-y-2"
            >
              {/* Image block */}
              <div className="h-16 bg-white/20 rounded"></div>
              {/* Text lines */}
              <div className="space-y-1.5">
                <div className="h-2 bg-white/30 rounded w-full"></div>
                <div className="h-2 bg-white/30 rounded w-5/6"></div>
                <div className="h-2 bg-white/20 rounded w-4/6"></div>
              </div>
              {/* Bottom blocks */}
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-8 bg-white/15 rounded"></div>
                <div className="flex-1 h-8 bg-white/15 rounded"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Performance Disclaimer */}
      <p className="text-xs text-white/20 text-center mt-6">
        * Performance benchmarks may vary depending on third-party integrations and app complexity.
      </p>
    </div>
  );
}
