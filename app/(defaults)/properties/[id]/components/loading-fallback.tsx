import React from "react";

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Loading...</p>
    </div>
  </div>
);

export default LoadingFallback;
