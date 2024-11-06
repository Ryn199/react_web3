import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './component/HomePage'
import { useState } from 'react';



const user = {
  name: 'Muhammad Ridho Yudiana',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
//aa
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  const [count, setCount] = useState(0)

  function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  

  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }

  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }
  

  function Header() {
    return (

      <h1>Header</h1>
    )
  }
  

  function Atas(props){
    return (

      <h3>Atas dari sebuah website yang dibuat oleh {props.name} dengan nama {props.webname}</h3>
    )
    
  }

  return (
    <>
      <Header/>

      <Profile/>

      <Atas name="Muhammad" webname="React"/>
      <Atas name="Ridho" webname="React"/>
      <Atas name="Yudiana" webname="React"/>
      
      <MyButton/>
      <ShoppingList/>
      <MyApp1/>
      <MyApp/>
      <HomePage/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

export function MyApp1() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton1 />
      <MyButton1 />
    </div>
  );
}

function MyButton1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}




export function MyApp() {
  const [count, setCount] = useState(0);

  function handleClickminus() {
    setCount(count - 1);
  }
  function handleClickplus() {
    setCount(count + 5);
  }
  function handleClickreset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Tambah Kurang Reset Nomor</h1>
      <h1>{count}</h1>

      <button onClick={handleClickplus}>Tambah</button>
      <button onClick={handleClickminus}>Kurang</button>
      <button onClick={handleClickreset}>Reset</button>
    </div>
  );
}

