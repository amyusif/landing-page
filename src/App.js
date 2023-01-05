import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { robots } from "./components/4.2 robots";




const App = () => {

  const allCards = robots.map((items, index) => {
    return <Card key={index}
     name={robots[index].name} 
     email={robots[index].email} id={robots[index].id}/>
  })

  return (
    <>
    <Navbar />
    <div className="cards-container">
      {allCards}
    </div>

    </>
  );
  }
export default App;
