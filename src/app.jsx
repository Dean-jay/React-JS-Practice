import './app.css';
import ItemCard from './components/itemCard/itemCard';
import TodoCard from './components/itemCard/todoCard';
import MainCard from './components/mainCard/mainCard';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <h1>Todolist : 와.... CSS 겁나 깨지넹...</h1>
      <TodoCard />

      <h1>1. CSS handling</h1>
      <Nav></Nav>
      <MainCard></MainCard>

      <h1>2. CSS animation</h1>
      <ItemCard />
    </>
  );
}

export default App;
