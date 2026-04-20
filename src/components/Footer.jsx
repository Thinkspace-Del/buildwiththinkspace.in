import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 w-full">
        <div className="space-y-4">
          <div className="text-lg font-black text-zinc-900 dark:text-zinc-100 font-headline">
            Thinkspace
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            © Thinkspace. Keep Building.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-50 font-bold">
              Social
            </p>
            <div className="flex flex-col gap-2">
              <a
                className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Twitter
              </a>
              <a
                className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Instagram
              </a>
              <a
                className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                GitHub
              </a>
              {/* <a
                className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Newsletter
              </a> */}
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 md:pt-0">
            <div className="font-mono text-[10px] text-zinc-400 uppercase">
              System Status
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-orange-700 dark:text-orange-500">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              LIVE_BUILD_MODE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
