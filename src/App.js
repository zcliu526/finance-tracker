import './App.css';
import Item from './components/Item/Item'
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car insurance', amount: 294.67, date: new Date(2023, 4, 18) },
    { id: 'e2', title: 'Car insurance', amount: 264.67, date: new Date(2023, 2, 21) },
    { id: 'e3', title: 'Car insurance', amount: 284, date: new Date(2023, 3, 22) }
];


  return (
    <>
      <Expenses expenses={expenses}/>
    </>
  );
}

export default App;
