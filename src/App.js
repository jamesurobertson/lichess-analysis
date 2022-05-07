import { useEffect, useState } from "react";

const player = "Urquhart";
const App = () => {
  const [accuracy, setAccuracy] = useState(null);
  useEffect(() => {
    fetch(`https://lichess.org/api/user/${player}/current-game`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        const acl = 23;
        const accuracyRating = (103.3979 - 0.3820659 * acl - 0.002169231 * acl) ^ 2;
        setAccuracy(accuracyRating);
      });
  }, []);
  return <div>{accuracy}</div>;
};

export default App;
