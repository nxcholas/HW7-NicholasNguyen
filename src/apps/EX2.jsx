import '../css/EX2.css'
import { useEffect } from 'react';

function EX2 () {
  const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];

  const getCharacters = houseCode => {
    switch (houseCode) {
    case "ST":
    return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
    return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
    return ["Robert", "Stannis", "Renly"];
    case "TA":
    return ["Aerys", "Daenerys", "Viserys"];
    default:
    return []; // Empty array
    }
    };

    useEffect(() => {
      const select = document.getElementById('house');
      
    })

  return (
    <div
      id="ex2-container">
        <h1>A few of the Game of Thrones characters</h1>
        <form>
          <label for="house">House</label>:
          <select name="house" id="house">
          <option value="" selected>Select a house</option>
          </select>
        </form>
        <p>
          <ul id="characters"></ul>
        </p>
      </div>
  )
}

export default EX2