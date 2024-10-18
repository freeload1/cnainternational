import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CNAHeader from "./components/CNAHeader"
import CNANavigationBar from './components/CNANavigationBar'
import CNATopics from './components/CNATopics'
import CNASocialMedia from './components/CNASocialMedia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CNAHeader />
      <CNANavigationBar />
      <CNATopics />
      <CNASocialMedia />
    </>
  )
}

export default App
