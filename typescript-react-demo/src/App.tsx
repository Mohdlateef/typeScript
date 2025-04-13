import { Example2 } from "./components/Example2"
import ExampleType from "./components/exampleType"


function App() {

  return (
    <>
      <div>
        <ExampleType name="mango" color="yellow" count={4} />
        <ExampleType name="mango" color="yellow" count="4" />
        <Example2 name="lateef"> <h1>hey how are you</h1></Example2>


      </div>
    </>
  )
}

export default App
