import DoubleArrow from "../assets/images/DoubleArrow.png"
import Hide from "../assets/images/Hide.png"
import UpDown from "../assets/images/UpDown.png"
import ArrowAutofit from "../assets/images/ArrowAutofit.png"
import Filter from "../assets/images/Filter.png"
import Import from "../assets/images/Import.png"
import Export from "../assets/images/Export.png"
import Share from "../assets/images/Share.png"
import Create from "../assets/images/Create.png"
const Toolbar = () => {
  return (
    <div className="flex justify-between py-2 pl-2 pr-8 border-b border-gray-300 text-sm">
      {/* left */}
      <div className="flex gap-10">
        <div className="flex items-center gap-1 border-r border-gray-300 px-2 ">
          <p>Tool bar</p>
          <div>
            <img src={DoubleArrow} alt="double-arr" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="cursor-pointer">
            <img src={Hide} alt="hide" />
          </div>
          <p>Hide fields</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img src={UpDown} alt="up-down-arr" />
          </div>
          <p>Sort</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img src={Filter} alt="filter" />
          </div>
          <p>Filter</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img src={ArrowAutofit} alt="ArrowAutofit" />
          </div>
          <p>Cell view</p>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-2">
        <div className="flex items-center px-4 py-1 border border-gray-300 rounded-sm text-gray-700 gap-1">
          <div>
            <img src={Import} alt="import" />
          </div>
          <p>Import</p>
        </div>
        <div className="flex items-center px-4 py-1 border border-gray-300 rounded-sm text-gray-700 gap-1">
          <div>
            <img src={Export} alt="export" />
          </div>
          <p>Export</p>
        </div>
        <div className="flex items-center px-4 py-1 border border-gray-300 rounded-sm text-gray-700 gap-1">
          <div>
            <img src={Share} alt="share" />
          </div>
          <p>Share</p>
        </div>
        <div className="flex items-center gap-1 bg-[#4B6A4F] rounded-sm px-8 py-2 text-white">
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