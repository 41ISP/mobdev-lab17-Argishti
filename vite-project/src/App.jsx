import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from '../component/note'

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Выучить реакт",
      body: "Изучить state"
    }
  ])


  return (
     <>
     <h1>Мини Keep — статический шаблон</h1>
        <section class="new-note" aria-label="Создать заметку">
            <input type="text" placeholder="Заголовок" />
            <textarea placeholder="Заметка..."></textarea>
        </section>


        <section class="grid" aria-label="Заметки">
            {notes.map((el)=> <Note {...el}/>)}
        </section>
     </>
    
  )
}

export default App
