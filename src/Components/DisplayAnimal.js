


import {useState} from 'react';

const DisplayAnimal = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand'
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      

      console.log('result is: ', JSON.stringify(result));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

        <div className="animalContainer">
        <img src={data.image_link} />
        <p>My name is {data.name}</p>
        <p>I am a {data.animal_type}</p>
        <p>Am I cute or what?</p>
        </div>
    </div>
  );
};

export default DisplayAnimal;
