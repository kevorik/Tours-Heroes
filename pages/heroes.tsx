import Link from "next/link"
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { MainLayout } from "../components/MainLayout";

const Div = styled.div`
    display:flex;
    justify-content: center;
`;
const Name = styled.div`
    padding-left: 8px;
    display: flex;
    align-items: center;
    margin-top: 7px;
    border: 1px solid gray;
    padding: 5px 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 10px;
    background-color: lightgrey;
    color: black;
    width: 70px;
`;


const Span = styled.span`
    border: 1px solid grey;
    background-color: #62639B;
    color: white;
    margin-top: 7px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const Id = styled.div`
    padding: 5px 5px;
`;

const Ul = styled.ul`
    padding-left: 0px;
    margin-left: 835px;
    margin-right: 840px;
`;


type THeroes = {
    heroes: { "id": number, "name": string }[];
};

export default function Heroes() {
    const [heroes, setHeroes] = useState<any[]>([])
        useEffect(() => {
        async function load() {
        // const response = await fetch('https://vercel-pink-nu.vercel.app/heroes')
        const response = await fetch(`${process.env.API_URL}/heroes`)

        const json: any[] = await response.json()
        setHeroes(json)
        }
        load()
    }, [])


    return (
        <MainLayout>
        <h1 style={{display: 'flex',justifyContent: 'center', color: 'aqua'}}>My Heroes</h1>
        <Ul>
            {heroes.map(hero => (
                <div key = {hero.id}>
                    <Link style={{textDecoration: 'none'}} href={`/details/${hero.id}`}>
                        <Div>
                        <Span>
                        <Id>{hero.id}</Id>
                        </Span>
                        <Name> {hero.name}</Name>                        
                        </Div>
                        </Link>
                        
                        
                </div>
            ))}
        </Ul>
        </MainLayout>
    )
}

// Heroes.getInitialProps = async () => {
//     const response = await fetch( `${process.env.API_URL}/heroes`)
//     const heroes = await response.json()

//     return {
//         heroes
//     }
// }