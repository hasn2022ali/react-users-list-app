
import { FC } from "react";
import User from "./components/User";
import { AppProps } from "../src/types/App.type"
import { useUsers } from "./hooks/useUsers";


const App: FC<AppProps> = ({title}) => {
  
   const { users, isLoading, error} = useUsers();

  return <div>
    <h1>WElcome to - {title}</h1>
    {isLoading && <p>Loading ....</p>}
    {error && <p>{error}</p>}
    <ul>
      {users.map(({login, name, email}) => {
        return (
         <User key={login.uuid} name={name} email={email} />
        );
      } )
       }
    </ul>
  </div>
}

export default App;