import { useState } from "react";
import "./App.css";





function App() {

  const [page, setPage] = useState(1)

  const pageContent = () => {
    switch (page) {
      case 1:
        return <>Slider 1</>
      case 2:
        return <>Slider 2</>
      case 3:
        return <>Slider 3</>


      default:
        return <>Default</>

    }
  }
  return <>

    <div className="page" style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 50, fontWeight: 600 }}>

      {pageContent()}
    </div>

    <div className="btns" style={{ display: "flex", justifyContent: "space-between", padding: 30 }}>
      <button style={{ width: 100, height: 40, backgroundColor: "blue", color: "white", fontSize: 20, fontWeight: 600, borderRadius: 30, border: "none" }}
        onClick={(e) => {
          e.preventDefault();
          if (page > 1) {
            setPage(page - 1);
          }
        }}>Prev</button>
      <button style={{ width: 100, height: 40, backgroundColor: "blue", color: "white", fontSize: 20, fontWeight: 600, borderRadius: 30, border: "none" }}
        onClick={(e) => {
          e.preventDefault();
          if (page !== 3) {
            setPage(page + 1);
          }
        }}>Next</button>

    </div>

  </>;
}

export default App;
