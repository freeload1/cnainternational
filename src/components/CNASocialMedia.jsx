import React from 'react'
import facebookImage from "../assets/Facebook.jpg"
import youtubeImage from "../assets/YouTube.jpg"

const CNASocialMedia = () => {
    return (
        <div className="bg-red-900">
            <div class="text-center font-bold">
                <a class="font-bold text-white" href="#navigationBar">HOME</a>
            </div>
            <footer id="socialMedia" className="flex justify-center">
                <a href="https://www.youtube.com/@catholicfrontline781" target="_blank" alt="Catholine Frontline YouTube Logo"><img className="h-10 w-10 pr-3" src={youtubeImage} /></a>
                <a href="https://www.facebook.com/profile.php?id=100064880550188" target="_blank" alt="Catholine Frontline Media Facebook Logo">
                    <img className="h-10 w-10 pr-3" src={facebookImage} /></a>
                <a href="https://www.facebook.com/groups/505770049435026" target="_blank" alt="Catholine Frontline Media Facebook Logo"><img className="h-10 w-10 pr-3"src={facebookImage} /></a>
            </footer>
        </div>
    )
}

export default CNASocialMedia