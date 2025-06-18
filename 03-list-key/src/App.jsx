import './App.css'
import Dynamiclist from './Components/Dynamiclist'
import Staticlist from './Components/Staticlist'

function App() {
    const[list, setList] = useState(['Home', 'About', 'Contact', 'Services', 'Blog']);

  return (
    <>
      <div>
        <Staticlist list={list}/>
        <Dynamiclist />
      </div>
    </>
  )
}

export default App
