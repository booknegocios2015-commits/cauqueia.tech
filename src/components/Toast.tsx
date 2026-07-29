interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-stone-900 text-white text-sm px-5 py-4 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <span className="font-medium leading-tight">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="text-stone-400 hover:text-white text-lg font-mono leading-none focus:outline-none cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}
