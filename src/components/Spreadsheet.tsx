import React from "react";
import Link from "../assets/images/Link.png";
import Refresh from "../assets/images/Refresh.png";
import Shape from "../assets/images/Shape.png";
import More from "../assets/images/More.png";
import ProfileImg from "../assets/images/ProfileImg.png";
import Bag from "../assets/images/Bag.png";
import Hash from "../assets/images/Hash.png";
import URL from "../assets/images/URL.png";
import Assign from "../assets/images/Assign.png";
import Status from "../assets/images/Status.png";
import Down from "../assets/images/Down.png";
import Calendar from "../assets/images/Calendar.png";
import Add from "../assets/images/Add.png";
import Create from "../assets/images/Create.png";

const filledRows = [
  {
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000 ₹",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000 ₹",
  },
  {
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsons...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000 ₹",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000 ₹",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000 ₹",
  },
];

// Fill up to 100 rows
const data = [
  ...filledRows,
  ...Array.from({ length: 95 }, () => ({
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  })),
];

const Spreadsheet: React.FC = () => {
  return (
    <div className="max-w-full  overflow-hidden pr-8">

      {/* Table */}
      <div className=" max-h-[540px] overflow-x-auto overflow-y-auto scrollbar-hide">
        <table className="min-w-full table-fixed border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-white">
            {/* First header row */}
            <tr>
              <th>
                <div className=" bg-white">
                  {/* Blank */}
                </div>
              </th>
              <th colSpan={4} className="mx-4">
                <div className="flex items-center gap-4 px-6 bg-[#E2E2E2] py-1 border border-gray-100">
                  <div className="flex-content-center py-1 px-4 bg-[#EEEEEE] rounded-sm">
                    <div>
                      <img src={Link} alt="" />
                    </div>
                    <div>
                      <p>Q3 Financial Overview</p>
                    </div>
                  </div>
                  <div>
                    <img src={Refresh} alt="refresh" />
                  </div>
                </div>
              </th>
               <th className="">
                  <div className=" bg-white">
                  </div>
              </th>
              <th>
                <div className="flex-content-center py-2 bg-[#D2E0D8] border border-gray-100">
                  <div>
                    <img src={Shape} alt="shape" />
                  </div>
                  <div>
                    <p>ABC</p>
                  </div>
                  <div>
                    <img src={More} alt="more" />
                  </div>
                </div>
              </th>
              <th colSpan={2}>
                <div className="flex-content-center py-2 bg-[#DECFFC] border border-gray-100">
                  <div>
                    <img src={Create} alt="Create"/>
                  </div>
                  <div>
                    <p>Answer a Question</p>
                  </div>
                  <div>
                    <img src={More} alt="more" />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex-content-center py-2 bg-[#FAD5AF] border border-gray-100">
                  <div>
                    <img src={Create} alt="Create" />
                  </div>
                  <div>
                    <p>Extract</p>
                  </div>
                  <div>
                    <img src={More} alt="more" />
                  </div>
                </div>
              </th>
              <th className="border-l border-r border-t border-dashed border-gray-300 py-2 pr-4 bg-[#EEEEEE]">
                <div className="flex items-center justify-center">
                  <img src={Add} alt="add"  />
                </div>
              </th>

            </tr>
            {/* Second header row */}
            <tr className="">
              <th className="head-cell-bg p-2">
                <img src={Hash} alt="#"/>
              </th>
              <th rowSpan={2} className="head-cell-bg text-left">
                <div className="flex-content-justify-between px-2">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img src={Bag} alt="bag" />
                    </div>
                    <p>Job Request</p>
                  </div>
                  <div>
                    <img src={Down} alt="arrow" />
                  </div>
                </div>
              </th>
              <th rowSpan={2} className="head-cell-bg text-left">
                <div className="flex-content-justify-between px-2">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img src={Calendar} alt="calender" />
                    </div>
                      <p>Submitted</p>
                    </div>
                  <div>
                    <img src={Down} alt="arrow" />
                  </div>
                </div>
              </th>
              <th rowSpan={2} className="head-cell-bg text-left">
                 <div className="flex-content-justify-between px-2 ">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img src={Status} alt="status" />
                    </div>
                      <p>Status</p>
                    </div>
                  <div>
                    <img src={Down} alt="arrow" />
                  </div>
                </div>
              </th>
              <th rowSpan={2} className="head-cell-bg text-left">
                <div className="flex-content-justify-between px-2">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img src={ProfileImg} alt="profileImg" />
                    </div>
                      <p>Submitter</p>
                    </div>
                  <div>
                    <img src={Down} alt="arrow" />
                  </div>
                </div>
              </th>
              <th rowSpan={2} className="head-cell-bg text-left">
                <div className="flex-content-justify-between px-2">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img src={URL} alt="url" />
                    </div>
                      <p>URL</p>
                    </div>
                  <div>
                    <img src={Down} alt="arrow" />
                  </div>
                </div>
              </th>
              <th rowSpan={2} className=" bg-[#E8F0EF] border border-[#f6eeea] text-left">
                <div className="flex-content-center px-2 ">
                  <div>
                    <img src={Assign} alt="assign" />
                  </div>
                  <div>
                    <p>Assigned</p>
                  </div>       
                </div>
              </th>
              <th className="bg-[#EFE3FC] border border-[#f6eeea] text-left">
                <div className=" bg-[#EFE3FC] text-[#6A5C80]  px-2  w-32">        
                    <p>Priority</p>       
                </div>
              </th>
              <th className="bg-[#EFE3FC] border border-[#f6eeea] text-left">
                <div className=" text-[#6A5C80]  px-2 w-32">
                  <p>Due Date</p>
                </div>
              </th>
              <th className="bg-[#FFF6E0] border-b-[#f6eeea]">
                <div className="  text-[#8C7162] px-2 w-32">
                  <p>Est. Value</p>
                </div>
              </th>
              <th className="border-l border-r border-dashed border-gray-300 px-2" style={{borderBottom: "1px solid #f6eeea"}}>
                <div className=" bg-white px-2 w-31">
                  {/* blank */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="cell-style">{i + 1}</td>
                <td className="cell-style whitespace-nowrap tracking-wide">{row.jobRequest}</td>
                <td className="cell-style text-right">{row.submitted}</td>
                <td className="cell-style whitespace-nowrap">{row.status}</td>
                <td className="cell-style whitespace-nowrap">{row.submitter}</td>
                <td className="cell-style underline">{row.url}</td>
                <td className="cell-style whitespace-nowrap">{row.assigned}</td>
                <td className="cell-style ">{row.priority}</td>
                <td className="cell-style ">{row.dueDate}</td>
                <td className="cell-style ">{row.estValue}</td>
                <td className="border-l border-r border-dashed border-gray-300 px-2" style={{borderBottom: "1px solid #f6eeea"}}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
