import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const Div = styled.div`
    display: flex;
    flex-direction:row;
`;

const H2 = styled.h2`
background-color: aqua;
padding: 30px;
color: black;
font-size: 20px;
`;

const Ul = styled.ul`
    display: flex;
    padding-left: 8px;
    justify-content: space-evenly;
    padding-right: 1060px;
`;

const H1 = styled.h1`
    padding-left: 300px;
    color: firebrick;
`;


type THeroes = {
    heroes: { "id": number, "name": string }[];
};


export default function Dashboard() {
    const [heroes, setHeroes] = useState<any[]>([])
        useEffect(() => {
        async function load() {
        const response = await fetch('http://localhost:4000/heroes?limit=4')
        console.log(response);
        const json: any[] = await response.json()
        setHeroes(json.slice(0,4))
        }
        load()
    }, [])

    return(
    <MainLayout>
        <H1>Top Heroes</H1>
        <Ul>
            {heroes.map(hero => (
                <div key = {hero.id}>
                    <Link href={`/details/${hero.id}`}>
                        <Div>
                        <H2> {hero.name}</H2>
                        </Div>
                        </Link>
                        {/* <Link href={{ pathname: '/details', query: { id: hero.id, name: hero.name } }}>{hero.name}</Link> */}
                </div>
            ))}
        </Ul>
    </MainLayout>
    )
}

// Dashboard.getInitialProps = async () => {
//     const response = await fetch('http://localhost:4000/heroes?limit=4')
//     const heroes = await response.json()
    

//     return {
//         heroes
//     }
// }