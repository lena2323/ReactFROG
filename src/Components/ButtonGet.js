import React, { useEffect, useState } from "react";

const ButtonGet = () => {
    const [name, setAnimalName] = useState("");
    const [type, setAnimalType] = useState("");
    useEffect(() => {
        const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setAnimalName(data.name);
                setAnimalType (data.animal_type);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
      <div>
      <p>{name}</p>
      <p>{type}</p>
      </div>
    );
};

export default ButtonGet;