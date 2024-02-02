import avatarJessica from './assets/avatar-jessica.jpeg'
import './App.scss'

function App() {

  const sites = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram"
  ]

  return (
    <main>
      <section>
        <img src={avatarJessica} alt="Avatar Jessica" />
      <div>
        <h1>Jessica Randall</h1>
        <sub>London, United Kingdom</sub>
      </div>
      <p>"Front-end developer and avid reader."</p>
      </section>
      <div className='sites'>
        {sites.map((site) => (
          <a href='#'>{site}</a>
        ))}
      </div>
    </main>
  )
}

export default App
