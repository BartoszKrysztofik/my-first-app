import React from "react"
import { useState, useEffect } from "react"

export default function Navbar() {

    return (
            <nav className="bg-gray-400 border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="w-full block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex  p-4 md:p-0 mt-4  bg-gray-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
    )
}