import ExampleType from "./components/exampleType"


function App() {

  return (
    <>
      <div>
        <ExampleType name="mango" color="yellow" count={4} />
        <ExampleType name="mango" color="yellow" count="4" />

      </div>
    </>
  )
}

export default App
