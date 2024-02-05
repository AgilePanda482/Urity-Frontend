import './App.css'
import { Access } from './AccessCard.jsx'
//import { Access } from './Access.jsx'

const users = [
  {
    name: 'ABRAHAM EMMANUEL GONZALEZ RINCON',
    code: 221768626,
    info: '6A1BTW',
    ubication: true
  },
  {
    name: 'DAVID SEBASTIAN RICO VELA',
    code: 221766666,
    info: '6A1BTW',
    ubication: false
  },
  {
    name: 'DIEGO CHAVEZ DORADO',
    code: 221768626,
    info: '6A1BTW',
    ubication: true
  },
  {
    name: 'ARANTZA ORTIZ CABRERA',
    code: 221766666,
    info: '6A1BTW',
    ubication: false
  }
]

export function App () {
  return (

    <section className='App'>
        
        {
            users.map(({ name, code, info, ubication }) => (
            <Access
                key={name}
                code={code}
                info={info}
                ubication={ubication}
            >
                {name}
            </Access>
            ))
        }
    </section>

  )
}

function hola (name) {
  console.log("Hola " + name);
}

hola('Abraham')