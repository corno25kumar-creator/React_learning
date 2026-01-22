import axiosInstance from "./axiosInstance";
import {  useState } from 'react'

function GetPost() {
  const [users, setUsers] = useState([])

  const [userDetail, setuserDetail] = useState({ name: '', age: '', id: '' })

   const [show, setShow] = useState(false)



   const toggleShow = () => {
    setShow(!show)
  }

  // get logic here
  const getUsers = async () => {
    try {
       const response = await axiosInstance.get("/users");
       setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data from mock API', error)
    }
  }

    // Post logic here
  const postUsers = async () => {
    try {
        await axiosInstance.post("/users", {
      name: "chandan",
      age: "24",
    });
    getUsers();

    } catch (error) {
         console.error('Error in posting data from mock API', error)
    }
  }
// show the  form
  const editData = (user) => {
    setuserDetail(user) 
    toggleShow(true)      
}
// edit logic here
  const submitData = async()=> {
    try {
      await axiosInstance.put(`/users/${userDetail.id}`, userDetail);
    getUsers();
    setShow(false);  
    } catch (error) {
         console.error('Error in editing data in form ', error)
    }
}
// delete logic here
    const deleteData = async (id) => {
        try {
          await axiosInstance.delete(`/users/${id}`);
    getUsers();
  
        } catch (error) {
             console.error('Error in editing data in form ', error)
        }
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Data Management</h1>


        {show &&
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-700 text-center">Add User</h2>

        <input
          type="text"
          value={userDetail.name}
          onChange={(e) =>setuserDetail({ ...userDetail, name: e.target.value })}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Age"
          value={userDetail.age}
          onChange={(e) => setuserDetail({ ...userDetail, age: e.target.value })}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="ID"
           value={userDetail.id}
            onChange={(e) => setuserDetail({ ...userDetail, id: e.target.value })}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={submitData}
        >
          Submit
        </button>
      </form>  }

      <div className="flex gap-4 mb-8">
        <button
          onClick={getUsers}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Get Users
        </button>
        <button
          onClick={postUsers}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Post Users
        </button>
      </div>

      <div className="w-full max-w-2xl">
        {users.length === 0 ? (
          <p className="text-gray-500 text-center">No users found. Click "Get Users" to fetch data.</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-gray-500">Age: {user.age}</p>
                </div>
                <div className="text-gray-400 font-mono">ID: {user.id}</div>
                <button onClick={()=>editData(user)}>✒️</button>
                <button onClick={() => deleteData(user.id)}>🩻</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GetPost
