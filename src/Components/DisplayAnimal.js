import {useState} from 'react';

const DisplayAnimal = () => {
  const [data, setData] = useState('');
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
      console.log(result);
      setData(result);

      const ehe = 
      <div className="animalContainer">
      <img src={result.image_link} />
      <p>My name is {result.name}</p>
      <p>I am a {result.animal_type}</p>
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

      <button onClick={handleClick} className="universal-button">Fetch data</button>
      {isLoading && <h2>Loading...</h2>}
      {yyy}

    </div>
    
  );
};

export default DisplayAnimal;