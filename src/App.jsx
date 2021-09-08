import { Redirect, Route, Switch } from "react-router-dom"
import Contacts from "./components/contacts/Contacts.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Project from "./components/project/Project"
import Skils from "./components/skils/Skils.jsx"
import Start from "./components/start/Start.jsx"


function App() {
  return (
    <div className="App">
      <div className='navbar'><Navbar /></div>
      <div className='content'>
        <Switch >
        <Route exact path='/' render={() => <Redirect to={'/AlexSobol'} />} />
        <Route path='/AlexSobol' component={Start} />
        <Route path='/skils' component={Skils} />
        <Route path='/project' component={Project} />
        <Route path='/contacts' component={Contacts} />
        </Switch>
        </div>
    </div>
  )
}

export default App
