import React from 'react'
import "./Login.css"

export default function LoginPeople() {
  return (
    <div id="webcrumbs"> 
        	<div className="w-full flex justify-center"><div className="w-[400px] bg-white rounded-lg shadow-xl p-8">
	  <div className="flex justify-center">
	    <details className="w-full">
	      <summary className="flex items-center justify-center text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity">
	        <span className="material-symbols-outlined mr-2">login</span>
	        Login
	      </summary>
	      <form className="mt-6 space-y-4">
	        <div>
	          <label className="block text-sm font-medium mb-1">Email</label>
	          <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <div>
	          <label className="block text-sm font-medium mb-1">Password</label>
	          <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200">
	          Sign in
	        </button>
	      </form>
	    </details>
	
	    <details className="w-full">
	      <summary className="flex items-center justify-center text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity">
	        <span className="material-symbols-outlined mr-2">person_add</span>
	        Register
	      </summary>
	      <form className="mt-6 space-y-4">
	        <div>
	          <label className="block text-sm font-medium mb-1">Full Name</label>
	          <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <div>
	          <label className="block text-sm font-medium mb-1">Email</label>
	          <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <div>
	          <label className="block text-sm font-medium mb-1">Password</label>
	          <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <div>
	          <label className="block text-sm font-medium mb-1">Confirm Password</label>
	          <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none" required />
	        </div>
	        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transform hover:scale-[1.02] transition-all duration-200">
	          Create Account
	        </button>
	      </form>
	    </details>
	  </div>
	  
	  <div className="mt-6 flex justify-center space-x-4">
	    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
	      <i className="fa-brands fa-facebook text-xl"></i>
	    </button>
	    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
	      <i className="fa-brands fa-google text-xl"></i>
	    </button>
	    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
	      <i className="fa-brands fa-apple text-xl"></i>
	    </button>
	  </div>
	</div></div> 
        </div>
  )
}
