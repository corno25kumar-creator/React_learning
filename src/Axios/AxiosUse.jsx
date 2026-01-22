import axios from 'axios'

function AxiosUse() {

    const config = {
        url: "/users",
        baseURL:"https://jsonplaceholder.typicode.com",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer djbcksjd"
        },

        timeout: 1000,

        params:{
            name: "mkl"
        },



    }

    const FetchAxiosData = async () => {
        const response = await axios(config)
        const data = response
        console.log(data)
    }

  return (
    <div>
      <h1>helloS</h1>
      <button onClick={FetchAxiosData} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">!click me!</button>
    </div>
  )
}

export default AxiosUse
