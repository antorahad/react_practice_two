import Day from './components/Day'
import Student from './components/Student';
import Person from './components/Person';
import Singer from './components/Singer';
import Product from './components/Product';
import './App.css'


function App() {
  const dayName = ['SAT', 'SUN', 'MON ', 'TUE', 'WED', 'THU', 'FRI'];  

  const student = ['Kalam', 'Jamal', 'Sohel', 'Ratul', 'Kabir'];

  const persons = ['Abul', 'Babul', 'Bulbul', 'Habib', 'Lotif'];

  const singers = [
      {name: 'Hridoy Khan', age: 35, song: 'ki jala diya gela more'},
      {name: 'Habib Wahid', age: 44, song: 'din gelo tmr poth chahiya'},
      {name: 'Bappa Mazumdar', age: 55, song: 'agun lagai dilo kone'}
  ];

  const products = [
      {name: 'iphone 13 Max Pro', color: 'Ocean Blue', price: 1200000, quantity: 2},
      {name: 'ipad Mini', color: 'Silver Gray', price: 900000, quantity: 5},
      {name: 'Hp Laptop', color: 'Black', price: 1000000, quantity: 3},
      {name: 'Gaming mouse', color: 'White', price: 8000, quantity: 12},
      {name: 'iphone 14 Max Pro', color: 'Black', price: 1500000, quantity: 4},
  ];
  return (
    <>
      {/* dynamic rendering one */}
      <section>
          <h1>Day Name</h1>
          {
            dayName.map(day => <Day name={day}></Day>)
          }
      </section>

      {/* dynamic rendering two */}
      <section>
          <h1>Student List</h1>
          {
            student.map(student => <Student name={student}></Student>)
          }
      </section>

      {/* dynamic rendering three */}
      <section>
        <h1>Person List</h1>
        {
            persons.map(person => <Person name={person}></Person>)
        }
      </section>

      {/* dynamic rendering four */}
      <section>
          <h1>Singer List</h1>
          <div className='singer-container'>
          {
              singers.map(singer => <Singer singer={singer}></Singer>)
          }
          </div>
      </section>

      {/* dynamic rendering five */}
      <section>
        <h1>Product List</h1>
          <div className='singer-container'>
              {
                products.map(product=><Product product={product}></Product>)
              }
          </div>
      </section>
    </>
  )
}

export default App
