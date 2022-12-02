import Link from "next/link"
import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";



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
        <ul style={{marginRight: '25px', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '220px'}}>
            {heroes.map(hero => (
                <div key = {hero.id}>
                    <Link style={{textDecoration: 'none'}} href={`/details/${hero.id}`}>
                        <div style={{display:'flex',justifyContent: 'center'}}>
                        <span style={{border: '1px solid grey',backgroundColor: '#62639B',color: 'white',marginTop: '7px',
                        borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px'}}>
                        <div style={{padding: '5px 5px'}}>{hero.id}</div>
                        </span>
                        <div style= {{display: 'flex',alignItems: 'center',marginTop: '7px',border: '1px solid gray',
                        paddingLeft: '20px',borderTopRightRadius: '10px',borderBottomRightRadius: '10px',backgroundColor: 'lightgrey',
                        color: 'black',width: '180px'}}> {hero.name}</div>
                        </div>
                        </Link>
                        
                        
                </div>

            ))}
            </div>
        </ul>
        </MainLayout>
    )
}
