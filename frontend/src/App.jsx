import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to MERN Stack</h1>
        <div>
        <Button variant="default">Button</Button>
        </div>
      </div>
    </>
  )
}

export default App
