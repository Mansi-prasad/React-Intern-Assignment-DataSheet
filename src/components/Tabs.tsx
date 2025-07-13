import { useState } from "react";
import Add from "../assets/images/Add.png";

const tabNames = ["All Orders", "Pending", "Reviewed", "Arrived"];

function Tabs() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="flex border border-t-gray-300 text-gray-600 font-medium px-11">
      {tabNames.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-3 text-sm hover:bg-gray-100 hover:cursor-pointer border-t-2 ${
            activeTab === tab
              ? "bg-green-100 border-[#4B6A4F]  text-[#4B6A4F]"
              : "border-transparent"
          }`}
        >
          {tab}
        </button>
      ))}
      <button className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer">
        <img src={Add} alt="add" className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Tabs;
