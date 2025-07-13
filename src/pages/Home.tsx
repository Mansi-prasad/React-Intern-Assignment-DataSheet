import Header from "../components/Header"
import Toolbar from "../components/Toolbar"
import Tabs from "../components/Tabs"
import Spreadsheet from "../components/Spreadsheet"
const Home = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Toolbar />
      <main className="flex-1 bg-white">
        <Spreadsheet />
      </main>
      <Tabs />
    </div>
    </>
  )
}
export default Home;