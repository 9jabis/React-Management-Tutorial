import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://picsum.photos/64/64/',
  'name': '구자빈',
  'birthday': '990401',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/64/64//',
  'name': '구자빈2',
  'birthday': '990402',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://picsum.photos/64/64///',
  'name': '구자빈3',
  'birthday': '990403',
  'gender': '남자',
  'job': '대학생'
}
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
