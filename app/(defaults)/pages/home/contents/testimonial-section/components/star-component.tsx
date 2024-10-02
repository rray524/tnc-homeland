import React from "react";

export const FullStar = () => (
  <svg
    className="w-5 h-5 text-yellow-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
  </svg>
);

export const HalfStar = () => (
  <svg
    className="w-5 h-5 text-yellow-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#d1d5db" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half-grad)"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z"
    />
  </svg>
);

export const EmptyStar = () => (
  <svg
    className="w-5 h-5 text-gray-300"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
  </svg>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FullStar key={`full-${i}`} />);
  }

  if (halfStar) {
    stars.push(<HalfStar key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStar key={`empty-${i}`} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
