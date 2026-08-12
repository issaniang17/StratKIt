import axios from "axios";
import { useEffect, useState } from "react";

type userProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
};

type postProps = {
  title:string;
  body:string;
}
const initialPost : postProps = {
  title:'',
  body:'',
}
const UserPage = () => {
  // stocker les donnees des utilisateurs
  const [user, setUser] = useState<userProps[]>([]);

  // gerer l'etat de chargement
  const [loading, setLoading] = useState(true);

  // gerer l'etat d'erreur
  const [erreur, setErreur] = useState<string | null>(null);
  const [post, setPost] = useState<postProps>(initialPost)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setPost((prev =>(
      {
        ...prev,
        [name]: value
      }
    )))
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setErreur(error.messages);
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement> ) =>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{post}).then(resp => console.log(resp.data)).catch(err => console.error(err))
    setPost(initialPost)
  }
 
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-row gap-2">
          <div className="animate-pulse bg-gray-300 w-64 h-64 rounded-lg"></div>
          <div className="flex flex-col gap-2">
            <div className="animate-pulse bg-gray-300 w-58 h-5 rounded-lg"></div>
            <div className="animate-pulse bg-gray-300 w-36 h-3 rounded-lg"></div>
            <div className="animate-pulse bg-gray-300 w-36 h-2 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }
  if(erreur){
    return <div>
        Erreur : {erreur}
    </div>
  }

  return (
    <div>
     <h1 className="text-center my-5 uppercase text-2xl font-bold">Utilisateurs</h1>
     <div className="flex flex-wrap gap-5 px-8 justify-center">
       {user.map((users, index)=>(
        <div key={index} className="bg-gray-300 rounded-xl p-4 hover:scale-105 duration-300 ease-in transition-all">
            <h2><span className="font-semibold">Nom: </span>{users.name}</h2>
            <p><span className="underline">Username:</span> {users.username}</p>
            <p><span className="font-semibold">Email: </span>{users.email}</p>
        </div>
       ))}
     </div>
     <form  onSubmit={handleSubmit} className="my-20 flex justify-center items-center gap-3 flex-col">
       <label htmlFor="titre_post">Titre de votre post</label>
       <input type="text" className="border rounded-lg p-4"
       name='title' value={post.title} onChange={handleChange}/>
       <label htmlFor="contenu">Contenu</label>
       <input type="text" className="border rounded-lg p-4"
       name='body'value={post.body} onChange={handleChange}/>
       <button className="ring p-2 bg-blue-300 rounded-lg">Submit</button>
     </form>
     <div>{post.body}</div>
    </div>
  );
};

export default UserPage;
