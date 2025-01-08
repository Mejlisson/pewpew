import "./type";

const getPerson = async (): Promise<SWPerson[]> => {
    const response = await fetch (`https://swapi.py4e.com/api/people/`);
    const data = await response.json();
    return data.results as SWPerson[];
  };
  const persons: SWPerson[] = await getPerson();
  console.log(persons);
  const ulPersons = document.getElementById("Person") as HTMLDListElement;

  persons.forEach(async (person:  SWPerson) =>{
    const homeworld = person.homeworld;
    const split: string[] = homeworld.split("/");
    const id: number = Number(split[split.length -2]);
    const p = document.createElement("p");
    p.innerHTML = `Name: ${person.name}, Birth year: ${person.birth_year}`;
    ulPersons.appendChild(p);
  }); 