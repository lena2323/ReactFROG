import React, { useEffect, useState } from "react";

const ButtonGet = () => {
    const [name, setAnimalName] = useState("");
    const [type, setAnimalType] = useState("");
    const [animalImage, setanimalImage] = useState("");

    useEffect(() => {
        const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setAnimalName(data.name);
                setAnimalType (data.animal_type);
                setanimalImage (data.image_link);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
      <div>
      <img src = {animalImage} />
      <p>My name is {name}</p>
      <p>I am a {type}</p>
      <p>Am I cute or what?</p>
      </div>
    );
};

export default ButtonGet;