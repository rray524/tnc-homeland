import React from "react";

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabClick, tabs }) => {
  return (
    <div className="flex flex-wrap space-x-2 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-2 px-2 md:px-4 font-semibold text-sm sm:text-base capitalize ${
            activeTab === tab
              ? "border-b-2 border-yellow-500 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
