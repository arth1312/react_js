import { useEffect, useState } from 'react';
import './App.css';
import HOCCOMP from './Components/HOCComp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HOCCOMP isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
}

export default App;
