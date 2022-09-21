import { CoffeeCard } from "../../../../components/CoffeeCard";
import { coffees } from "../../../../data/coffees";
import { CoffeeListContainer, CoffeeListContent } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <h1>Nossos cafés</h1>
      <CoffeeListContent>
        {
          coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}/>)
        }
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}