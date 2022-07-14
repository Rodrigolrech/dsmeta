import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>

  )
}

export default App
