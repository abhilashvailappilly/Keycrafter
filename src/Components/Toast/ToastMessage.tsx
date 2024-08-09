import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
// import { XIcon } from '@heroicons/react/solid';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed z-99 top-15 right-4 w-full max-w-xs dark:bg-black bg-white border border-gray-300 shadow-lg rounded-lg pointer-events-auto">
      <div className="p-4 flex items-start">
        <div className="flex-shrink-0">
          <span className="bg-blue-500 dark:bg-white rounded-full w-6 h-6 flex items-center justify-center text-white">
            <svg
              className="w-4 h-4 dark:text-black text-white "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m0-4h.01M12 12v.01M12 9v.01M12 16v.01M12 4v.01M12 20v.01"
              />
            </svg>
          </span>
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium dark:text-white text-gray-900">{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              setVisible(false);
              onClose();
            }}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
