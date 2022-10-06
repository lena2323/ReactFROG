


import {useState} from 'react';

const DisplayAnimal = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [yyy, setYYY] = useState('');
  

  const handleClick = async () => {
    setIsLoading(true);

    try {

      const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand'
      );

      

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(data);
      setData(result);

      const ehe = 
      <div className="animalContainer">
      <img src={data.image_link} />
      <p>My name is {data.name}</p>
      <p>I am a {data.animal_type}</p>
      <p>Am I cute or what?</p>
      </div>

      setYYY(ehe);



    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    };

    
  };


  return (

    <div>
      {err && <h2>{err}</h2>}
      <button onClick={handleClick}>Fetch data</button>
      {isLoading && <h2>Loading...</h2>}
      {yyy}

    </div>
    

  );
};

export default DisplayAnimal;
