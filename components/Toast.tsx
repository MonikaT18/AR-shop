
import React, { useEffect, useState } from 'react';

export interface ToastType {
  id: number;
  message: string;
}

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      handleClose();
    }, 2800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200); // Wait for fade-out animation
  };

  return (
    <div
      className={`bg-gray-800 text-white rounded-lg shadow-lg p-4 flex items-center justify-between transition-all duration-200 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="text-green-400 mr-3">
            <i className="bi bi-check-circle-fill"></i>
        </div>
        <span>{message}</span>
      </div>
      <button onClick={handleClose} className="ml-4 text-gray-400 hover:text-white">
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};
