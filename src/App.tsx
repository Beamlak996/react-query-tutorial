import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:8080/todos")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    fetchData()
  });

  console.log(data)

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;
