import React, { useEffect, useState } from 'react'
import commonInstance from '../api/commomInstance'

function User() {
  const [users, setUsers] = useState([])
  const [show, setShow] = useState(false)

  const getUsers = async () => {
    try {
      const response = await commonInstance.get("/users");
      setUsers(response.data)
       localStorage.setItem("users", JSON.stringify(response.data))
    } catch (error) {
      console.error("error occur during fetching user", error)
    }
  }

  useEffect(() => {
    const storedUsers = localStorage.getItem("users")
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }

    // Cleanup on unmount
    return () => {
     setUsers([])
     localStorage.clear()
    }
  }, [])

  const showUsers = () => {
    if (!show && users.length === 0) {
      getUsers()
    }
    setShow(!show)
  }
  useEffect(()=>{

  },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-96 rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          User Name List
        </h2>

        {/* User List */}
        {show && (
          <div className="max-h-60 overflow-y-auto border rounded-md p-3 mb-4 space-y-2">
            {users.map((ele) => (
              <div 
                key={ele.id} 
                className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 font-medium shadow-sm"
              >
                {ele.name}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={showUsers}
          className="w-full px-6 py-2 bg-green-500 text-white rounded-lg 
                     hover:bg-green-600 transition font-semibold"
        >
          {show ? "Hide Users" : "Get Users"}
        </button>

      </div>
    </div>
  )
}

export default User
