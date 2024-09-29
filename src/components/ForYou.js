import React from 'react'
import Template from './template'
import { useEffect } from 'react';

function ForYou() {


  return (
      <div className='h-screen'>

<div className="max-w-xl mx-auto border-b-2 p-4 shadow-sm bg-black">
      {/* Header: User Info */}
      <div className="flex items-start space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1807134036449529856/2TB7kbUM_400x400.jpg" // Example avatar URL
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Mufaddal Vohra</span>
            <span className="text-sm text-gray-500">@mufaddal_vohra · 3h</span>
          </div>
          {/* Tweet Text */}
          <p className="mt-1">
            <span className="font-bold">🚨 IPL RETENTIONS PRICE CAP. 🚨</span>
            <br />
            1st retention – 18cr. <br />
            2nd Retention – 14cr. <br />
            3rd Retention – 11cr. <br />
            4th Retention – 18cr. <br />
            5th Retention – 14cr. <br />
            <br />
            - 5 Retentions and 1 RTM Card for IPL 2025 Auction. (Sports Tak).
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src="https://pbs.twimg.com/media/GYlHUUHWAAEehY8?format=jpg&name=900x900" // Replace with actual image URL
          alt="IPL Image"
          className="w-full rounded-lg"
        />
      </div>

      {/* Footer: Interaction Buttons */}
      <div className="flex justify-between text-gray-500 mt-4">
        <div className="flex items-center space-x-1">
          <i className="fa fa-comment"></i>
          <span>325</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-retweet"></i>
          <span>1K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-heart"></i>
          <span>10K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-share"></i>
          <span>425K</span>
        </div>
      </div>
    </div>
        
    <div className="max-w-xl mx-auto p-4 border-b-2 shadow-sm bg-black">
      {/* Header: User Info */}
      <div className="flex items-start space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1405884872451842052/JKM8Rqui_400x400.jpg" // Example avatar URL
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Chris Hadfield</span>
            <span className="text-sm text-gray-500">@Cmdr_Hadfield · 7:00 PM Sep 28, 2024</span>
          </div>
          {/* Tweet Text */}
          <p className="mt-1">
            China has stated their astronauts will be walking on the Moon by 2030 – they just revealed their new suit.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Feitian_space_suit_at_NMC_02.jpg/800px-Feitian_space_suit_at_NMC_02.jpg" // Use the uploaded image path
          alt="Astronaut Suit"
          className="w-full rounded-lg"
        />
      </div>

      {/* Footer: Interaction Buttons */}
      <div className="flex justify-between text-gray-500 mt-4">
        <div className="flex items-center space-x-1">
          <i className="fa fa-comment"></i>
          <span>334</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-retweet"></i>
          <span>411</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-heart"></i>
          <span>2.2K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-share"></i>
          <span>159</span>
        </div>
      </div>
    </div>

    <div className="max-w-xl mx-auto border-b-2 p-4  shadow-sm bg-black">
      {/* Header: User Info */}
      <div className="flex items-start space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1697749409851985920/HbrI04tM_400x400.jpg" // Example avatar URL
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">SpaceX</span>
            <span className="text-sm text-gray-500">@SpaceX · 5:58 PM Sep 27, 2024</span>
          </div>
          {/* Tweet Text */}
          <p className="mt-1">
          Friday night lights in Starbase, Texas          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src="https://pbs.twimg.com/media/GYhegvhaMAAMZFj?format=jpg&name=4096x4096" // Use the uploaded image path
          alt="Astronaut Suit"
          className="w-full rounded-lg"
        />
      </div>

      {/* Footer: Interaction Buttons */}
      <div className="flex justify-between text-gray-500 mt-4">
        <div className="flex items-center space-x-1">
          <i className="fa fa-comment"></i>
          <span>334</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-retweet"></i>
          <span>411</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-heart"></i>
          <span>2.2K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-share"></i>
          <span>159</span>
        </div>
      </div>
    </div>

    <div className="max-w-xl mx-auto p-4 border-b-2 shadow-sm bg-black">
      {/* Header: User Info */}
      <div className="flex items-start space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1405884872451842052/JKM8Rqui_400x400.jpg" // Example avatar URL
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Chris Hadfield</span>
            <span className="text-sm text-gray-500">@Cmdr_Hadfield · 7:00 PM Sep 28, 2024</span>
          </div>
          {/* Tweet Text */}
          <p className="mt-1">
            China has stated their astronauts will be walking on the Moon by 2030 – they just revealed their new suit.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Feitian_space_suit_at_NMC_02.jpg/800px-Feitian_space_suit_at_NMC_02.jpg" // Use the uploaded image path
          alt="Astronaut Suit"
          className="w-full rounded-lg"
        />
      </div>

      {/* Footer: Interaction Buttons */}
      <div className="flex justify-between text-gray-500 mt-4">
        <div className="flex items-center space-x-1">
          <i className="fa fa-comment"></i>
          <span>334</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-retweet"></i>
          <span>411</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-heart"></i>
          <span>2.2K</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fa fa-share"></i>
          <span>159</span>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default ForYou
