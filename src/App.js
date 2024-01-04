import "./App.css";
import FootballGame from "./components/FootballGame";
import ListItems from "./components/ListItems";
import MyButton from "./components/MyButton";
import Drinkers from "./components/Drinkers"
import PureComp from './components/PureComp'
import ToolBar from "./components/ToolBar";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Number from './components/Number'
import Alice from "./components/Alice";
import UpdateObject from './components/UpdateObject'
import UpdateArrayState from "./components/UpdateArrayState";

function App() {
  return (
    <>
      <div className="container">
        <MyButton button="Change text" />
      </div>
      <FootballGame isGoal={false} noGoal='yes'/>
      <ListItems/>
      <Drinkers />
      <PureComp />
      <ToolBar/>
      <Gallery/>
      <Form/>
      <Number/>
      <Alice/>
      <UpdateObject/>
      <UpdateArrayState/>
    </>
  );
}

export default App;
