import React, {useState} from 'react'
import image1 from "../assets/announcement1.jpg"

const CNANavigationBar = () => {
    const [shownImage, setShownImage] = useState("")

    const handleClick = (event) => {
      setShownImage(event.currentTarget.value)
    }

    const announcementImages = {
      image1: image1
    }

    return (
    <div>
      <nav id="navigationBar" className="flex justify-center bg-red-900">
        <a href="#announcements" className="w-64 font-sans text-xl text-white">Announcements</a>
        <a href="#topics" className="px-12 w-64 font-sans text-xl text-white">Topics</a>
        <a href="#socialMedia" className="w-64 font-sans text-xl text-white">Social Media</a>
      </nav>
      <div className="flex relative top-0.5">
        <div id="announcements" className="h-screen bg-red-900 w-1/4 flex justify-center flex-wrap items-start font-sans text-xl text-white border-current border-8">
          <p className="h-10">Announcements</p>
          <button value="image1" onClick={handleClick}>
            <img src={image1} alt="This is the smaller picture." className="h-56 w-56 border-red-900 border-4" />
          </button>
        </div>
        <div className="w-3/4 bg-red-900 border-8 border-white flex justify-center items-center">
          <img src={announcementImages[shownImage]} alt="" className="h-25 w-25 border-red-900 border-4"/>
        </div>
      </div>
    </div>
  )
}

export default CNANavigationBar