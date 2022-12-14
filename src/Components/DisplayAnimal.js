import {useState} from 'react';

const DisplayAnimal = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [animalInfo, setanimalInfo] = useState('');
  const [message, setMessage] = useState('');
  const [messageIsShown, setmessageIsShown] = useState(false);
  const [buttonInTheMiddle, setbuttonInTheMiddle] = useState(true);


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

      const animalInfoContents = 
      <div className="animalContainer">
      <img src={result.image_link} />
      <p>My name is {result.name}</p>
      <p>I am a {result.animal_type}</p>
      <p>Am I cute or what?</p>
      </div>

      setmessageIsShown(true)
      setbuttonInTheMiddle(false)
      if (result.animal_type == 'Mammal'){
        setMessage("I heard there's milk missing in shops in yer country.... Milk this! *shows middle finger*") 
      }

      if (result.animal_type == 'Bird'){
        setMessage("If you want to fly like me try jumping off a  building!") 
      }
      if (result.animal_type == 'Reptile'){
        setMessage("Am I ugly? Yes! Am I scary? Also yes! And so are you, wooohooo!") 
      }

      if (result.animal_type == 'Amphibian'){
        setMessage("I eat flys and I'm still alive, you can survive without the cooker too!") 
      }
      
      if (result.animal_type == 'Fish'){
        setMessage("Water is my best friend and I ain't got no kidney stones!") 
      }

      setanimalInfo(animalInfoContents);

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);

    };
  };


  return (

    <div>
      {err && <h2>{err}</h2>}
      {isLoading && <h2 className='loading'>Loading...</h2>}
      {animalInfo} 
      <div className={ messageIsShown ? 'insp-border-top' : 'inspirational-message-container-none'}>
      Inspirational message: <br></br> {message}
      </div>
      <button onClick={handleClick} className= { buttonInTheMiddle ? "buttonInTheMiddle" : "universal-button" }>Click to see an interesting animal</button>
    </div>
    
  );
};

export default DisplayAnimal;