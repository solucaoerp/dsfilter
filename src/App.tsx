import Card from "./components/common/Card";
import Filter from "./components/common/Filter";
import Header from "./components/common/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Card>
          <Filter />
        </Card>
      </main>
    </>
  )
}