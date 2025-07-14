import Panel from "../assets/images/Panel.png";
import Chevron from "../assets/images/Chevron.png"
import More from "../assets/images/More.png"
import Group from "../assets/images/Group.png"
import Bell from "../assets/images/Bell.png"
import Profile from "../assets/images/Profile.png"
const Header = () => {
  return (
    <div className="flex justify-between border-b border-gray-300 pl-4 pr-8 py-2">
      {/* left  */}
      <div className="flex gap-6 items-center">
        <div>
          <img src={Panel} alt="panel" />
        </div>
        <div className="flex gap-4 items-center text-gray-600">
          <p className="">Workspace </p>
          <div>
            <img src={Chevron} alt="arr" />
          </div>
          <p>Folder 2</p>
         <div>
            <img src={Chevron} alt="arr" />
          </div>
          <p className="text-gray-900">Spreadsheet 3 </p> 
        <div onClick={()=>alert("Open more options..")} className="hover:cursor-pointer">
          <img src={More} alt="more" />
        </div>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-4 items-center text-sm">
        {/* search */}
        <div className="flex items-center gap-2 rounded-sm bg-gray-100 p-2">
            <div>
              <img src={Group} alt="search" />
            </div>
          <div>
            <input type="text" name="search" id="search" placeholder="Search within sheet" className="border-0 outline-0 text-sm" />
          </div>
        </div>
          <div onClick={()=>alert("Show notifications!")} className="relative inline-block mr-4 hover:cursor-pointer">
            <img src={Bell} alt="bell" className="w-5 h-5" />
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div onClick={()=>alert("Open user profile...")} className="text-3xl text-gray-700 hover:cursor-pointer">
              <img src={Profile} alt="profile" />
            </div>
            <div className="">
              <p className="text-[14px] text-gray-800 font-semibold">John Doe</p>
              <p className="text-[13px] text-gray-600">john.doe...</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Header