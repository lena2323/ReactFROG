import React, { useEffect, useState } from "react";

const ButtonGet = () => {
    const [name, setAnimalName] = useState("");

    useEffect(() => {
        const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setAnimalName(data.name);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
      <button className = "ButtonGet">{name}
      </button>
    );
};

export default ButtonGet;