import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { Button, Space } from 'antd';


const Div = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
`;

// const H2 = styled.h2`
// background-color: aqua;
// padding: 30px;
// color: black;
// font-size: 20px;
// `;

// const Button = styled.button`
// background: ${props => props.primary ? "palevioletred" : "white"};
// background-color: aqua;
// padding: 30px;
// color: black;
// font-size: 20px;
// `;

const Ul = styled.ul`
    display: flex;
    padding-left: 8px;
    justify-content: center;
`;

const H1 = styled.h1`
    color: red;
    display: flex;
    justify-content: center;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;



type THeroes = {
    heroes: { "id": number, "name": string }[];
};


export default function Dashboard() {
    const [heroes, setHeroes] = useState<any[]>([])
        useEffect(() => {
        async function load() {
        // const response = await fetch('https://vercel-pink-nu.vercel.app/heroes')
        const response = await fetch(`${process.env.API_URL}/heroes`)

        const json: any[] = await response.json()
        setHeroes(json.slice(0,4))
        }
        load()
    }, [])



    return(
        <MainLayout>
            <H1 style={{display: 'flex', justifyContent: 'center', color: 'red'}}>Top Heroes</H1>
            <Ul style={{display: 'flex',paddingLeft: '8px',justifyContent: 'center'}}>
                {heroes.map(hero => (
                    <div key = {hero.id}>
                        <Link style={{textDecoration: 'none'}} href={`/details/${hero.id}`}>
                            <Div style={{marginLeft: '20px'}}>
    
                            <Button type="primary" style={{padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px',}} > {hero.name}</Button>
                            </Div>
                            </Link>
                    </div>
                ))}
            </Ul>
        </MainLayout>
        )
}