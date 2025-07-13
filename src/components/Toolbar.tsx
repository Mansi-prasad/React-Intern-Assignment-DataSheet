import DoubleArrow from "../assets/images/DoubleArrow.png"
import Hide from "../assets/images/Hide.png"
import UpDown from "../assets/images/UpDown.png"
import ArrowAutofit from "../assets/images/ArrowAutofit.png"
import Filter from "../assets/images/Filter.png"
import Import from "../assets/images/Import.png"
import Export from "../assets/images/Export.png"
import Share from "../assets/images/Share.png"
import Create from "../assets/images/Create.png"
import Show from "../assets/images/Show.jpg"
import { useState } from "react"
const Toolbar = () => {
  const [hide, setHide]=useState(true);
  return (
    <div className="flex justify-between py-2 pl-2 pr-8 border-b border-gray-300 text-sm">
      {/* left */}
      <div className="flex gap-10 hover:cursor-pointer">
        <div onClick={()=>{console.log("Toolbar working..");alert("Tool bar clicked!")}} className="flex items-center gap-1 border-r border-gray-300 px-2 ">
          <p>Tool bar</p>
          <div>
            <img src={DoubleArrow} alt="double-arr" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div onClick={()=>setHide(!hide)} className="cursor-pointer">
            <img src={hide ? Hide : Show} alt={hide ? "hide" : "show"} />
          </div>
          <p>{hide ? "Hide fields":"Show fields"}</p>
        </div>
        <div onClick={()=>alert("Sorting...")} className="toolbar-items-style">
          <div>
            <img src={UpDown} alt="up-down-arr" />
          </div>
          <p>Sort</p>
        </div>
        <div onClick={()=>alert("Filter data...")} className="toolbar-items-style">
          <div>
            <img src={Filter} alt="filter" />
          </div>
          <p>Filter</p>
        </div>
        <div onClick={()=>alert("View cell")} className="toolbar-items-style">
          <div>
            <img src={ArrowAutofit} alt="ArrowAutofit" />
          </div>
          <p>Cell view</p>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-2">
        <div onClick={()=>{console.log("Import clicked");alert("Import...")}} className="btn-style">
          <div>
            <img src={Import} alt="import" />
          </div>
          <p>Import</p>
        </div>
        <div onClick={()=>{console.log("Export clicked");alert("Export...")}} className="btn-style">
          <div>
            <img src={Export} alt="export" />
          </div>
          <p>Export</p>
        </div>
        <div onClick={()=>{console.log("Share clicked");alert("Share the data...")}} className="btn-style">
          <div>
            <img src={Share} alt="share" />
          </div>
          <p>Share</p>
        </div>
        <div onClick={()=>{console.log("New Action clicked");alert("Create a new action")}} className="flex items-center gap-1 bg-[#4B6A4F] rounded-sm px-8 py-2 text-white hover:cursor-pointer">
          <div>
            <img src={Create} alt="create" className="text-white"/>
          </div>
          <button>New Action</button>
        </div>  
      </div>
    </div>
  )
}
export default Toolbar