import React, { useState } from 'react';
import type { ColumnDef } from "@tanstack/react-table";
import type { JobRow } from '../types/Types';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Link from "../assets/images/Link.png";
import Refresh from "../assets/images/Refresh.png";
import Shape from "../assets/images/Shape.png";
import More from "../assets/images/More.png";
import ProfileImg from "../assets/images/ProfileImg.png";
import Bag from "../assets/images/Bag.png";
import URL from "../assets/images/URL.png";
import Assign from "../assets/images/Assign.png";
import Status from "../assets/images/Status.png";
import Down from "../assets/images/Down.png";
import Calendar from "../assets/images/Calendar.png";
import Add from "../assets/images/Add.png";
import Create from "../assets/images/Create.png";
import filledRows from "../utils/FillRowData.json";

// Fill up to 100 rows
const data = [
  ...filledRows,
  ...Array.from({ length: 495 }, () => ({
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
  const [focusedCell, setFocusedCell] = useState<{ row: number; col: number } | null>(null);
  const [columnVisibility, setColumnVisibility] = useState({});

  const columns: ColumnDef<JobRow>[] = [
  {
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "jobRequest",
    header: "Job Request",
  },
  {
    accessorKey: "submitted",
    header: "Submitted",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const value = getValue<string>() ?? "";
      const statusColor = {
        "need to start": "text-gray-700 bg-gray-300",
        "complete": "text-green-700 bg-green-300",
        "blocked": "text-red-700 bg-red-300",
        "in-process": "text-yellow-700 bg-yellow-100",
      }[value.toLowerCase()] ?? "";
      return <div className={`px-2 py-1 rounded-4xl text-sm font-medium text-center ${statusColor}`}>{value}</div>;
    },
  },
  {
    accessorKey: "submitter",
    header: "Submitter",
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: ({ getValue }) => <span className="underline">{getValue<string>()}</span>,
  },
  {
    accessorKey: "assigned",
    header: "Assigned",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ getValue }) => {
      const value = getValue<string>() ?? "";
      const color = {
        high: "text-red-700 font-bold",
        medium: "text-yellow-700 font-bold",
        low: "text-blue-700 font-bold",
      }[value.toLowerCase()] ?? "";
      return <div className="w-full text-center">
        <span className={color}>{value}</span>
      </div>;
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "estValue",
    header: "Est. Value",
  },
];

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  enableColumnResizing: true, //  allow resizing
  columnResizeMode: 'onChange', // resize live as we drag
  state: {
    columnVisibility,
  },
  onColumnVisibilityChange: setColumnVisibility,
});


  const handleKeyDown = (
  e: React.KeyboardEvent<HTMLTableCellElement>,
  row: number,
  col: number
) => {
  e.preventDefault();

  const maxRow = data.length - 1;
  const minCol = 1;
  const maxCol = 10;

  let nextRow = row;
  let nextCol = col;

  switch (e.key) {
    case "ArrowRight":
      if (col === maxCol) {
        if (row < maxRow) {
          nextRow = row + 1;
          nextCol = minCol;
        }
      } else {
        nextCol = col + 1;
      }
      break;

    case "ArrowLeft":
      if (col === minCol) {
        if (row > 0) {
          nextRow = row - 1;
          nextCol = maxCol;
        }
      } else {
        nextCol = col - 1;
      }
      break;

    case "ArrowDown":
      if (row < maxRow) {
        nextRow = row + 1;
      }
      break;

    case "ArrowUp":
      if (row > 0) {
        nextRow = row - 1;
      }
      break;

    default:
      return;
  }

  setFocusedCell({ row: nextRow, col: nextCol });

  // Focus the next cell manually
  const selector = `td[data-row="${nextRow}"][data-col="${nextCol}"]`;
  const nextElement = document.querySelector<HTMLTableCellElement>(selector);
  if (nextElement) {
    nextElement.focus(); // focus with scroll
  }
};

return (
    <div className="max-w-full  overflow-hidden pr-8">
      <div className=" max-h-[540px] overflow-x-auto overflow-y-auto scrollbar-hide">
       <div className="flex flex-wrap gap-3">
        </div> 
      {/* Table */}
        <table className="min-w-full table-fixed border-separate border-spacing-0 ">
          <thead className="sticky top-0 z-10 bg-white">
            {/* First header row */}
            <tr className='py-2'>
              <th>
                <div className=" bg-white">
                </div>
              </th>
              <th colSpan={4} className="mx-4">
                <div className="flex items-center gap-4 px-4 bg-[#E2E2E2] py-1 border border-gray-100">
                  <div className="flex-content-center py-1 px-4 bg-[#EEEEEE] rounded-sm">
                    <div>
                      <img src={Link} alt="" />
                    </div>
                    <div>
                      <p>Q3 Financial Overview</p>
                    </div>
                  </div>
                  <div onClick={()=>{console.log("Refesh"); alert("Refresh clicked!")}} className="hover:cursor-pointer">
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
           <tr>
              {table.getFlatHeaders().map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.index === 0 ? "20px" : header.getSize(),
                    minWidth: header.index === 0 ? "20px" : undefined,
                  }}
                  className={`relative ${
                    header.index === 0
                      ? "head-cell-bg p-2"
                      : header.index === 6
                      ? "bg-[#E8F0EF] border border-[#f6eeea]"
                      : header.index === 7 || header.index === 8
                      ? "bg-[#EFE3FC] border border-[#f6eeea]"
                      : header.index === 9
                      ? "bg-[#FFF6E0] border-b-[#f6eeea]"
                      : "head-cell-bg"
                  }`}
                >
                  <div className="flex items-center justify-between px-2">
                    <div className="flex gap-2 items-center">
                      {/* Icons */}
                      {header.index === 1 && <img src={Bag} alt="bag" />}
                      {header.index === 2 && <img src={Calendar} alt="calendar" />}
                      {header.index === 3 && <img src={Status} alt="status" />}
                      {header.index === 4 && <img src={ProfileImg} alt="profile" />}
                      {header.index === 5 && <img src={URL} alt="url" />}
                      {header.index === 6 && <img src={Assign} alt="assign" />}
                      {header.index === 0 && ""}

                      {/* Label */}
                      {!header.isPlaceholder && (
                        <p className="select-none">
                          {typeof header.column.columnDef.header === "string"
                            ? header.column.columnDef.header
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </p>
                      )}
                    </div>

                  {/* Down arrow on the right */}
                  {(() => {
                    const headerLabel =
                      typeof header.column.columnDef.header === "string"
                        ? header.column.columnDef.header
                        : ""; 

                    // List of headers that should show the Down arrow
                    const headersWithDown = [
                      "Job Request",
                      "Submitter",
                      "Status",
                      "Submitted",
                      "URL",
                    ];
                    return headersWithDown.includes(headerLabel) && (
                      <img src={Down} alt="" />
                    );
                  })()}
                </div>

                  {/* Resizer */}
                  {header.index !== 0 && header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className="absolute right-0 top-0 h-full w-0.5 cursor-col-resize bg-gray-400 opacity-10 hover:opacity-40"
                    />
                  )}
                </th>
              ))}

              {/* Blank last cell (Add) */}
              <th
                className="border-l border-r border-dashed border-gray-300 px-2"
                style={{
                  borderBottom: "1px solid #f6eeea",
                  width: "140px", 
                  minWidth: "50px",
                }}
              />
          </tr>
          </thead>
          <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr key={row.id} className='whitespace-nowrap overflow-hidden text-ellipsis'>
              {row.getVisibleCells().map((cell, colIndex) => (
                <td
                  key={cell.id}
                  tabIndex={0}
                  data-row={rowIndex}
                  data-col={colIndex}
                  onFocus={colIndex === 0 ? undefined :() => setFocusedCell({ row: rowIndex, col: colIndex })}
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                  className={`border border-[#f6eeea] p-2 outline-none ${
                    focusedCell?.row === rowIndex && focusedCell?.col === colIndex
                      ? "ring-1 ring-[#6C8B70] shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]"
                      : ""
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td
                tabIndex={0}
                data-row={rowIndex}
                data-col={row.getVisibleCells().length}
                onFocus={() => setFocusedCell({ row: rowIndex, col: row.getVisibleCells().length })}
                onKeyDown={(e) =>
                  handleKeyDown(e, rowIndex, row.getVisibleCells().length)
                }
                className={`border-l border-r border-dashed border-gray-300 px-2 outline-none ${
                  focusedCell?.row === rowIndex &&
                  focusedCell?.col === row.getVisibleCells().length
                    ? "ring-1 ring-[#6C8B70] shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]"
                    : ""
                }`}
                style={{ borderBottom: "1px solid #f6eeea" }}
              />
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
