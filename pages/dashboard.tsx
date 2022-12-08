import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { useEffect, useState } from "react";
import { Button } from 'antd';

export default function Dashboard() {
    const [heroes, setHeroes] = useState<any[]>([])
        useEffect(() => {
        async function load() {
        const response = await fetch(`${process.env.API_URL}`)
        const json: any[] = await response.json()
        setHeroes(json.slice(0,4))
        }
        load()
    }, [])

    return(
        <MainLayout>
            <h1 style={{display: 'flex', justifyContent: 'center', color: 'red'}}>Top Heroes</h1>
            <ul style={{display: 'flex',paddingLeft: '8px',justifyContent: 'center'}}>
                {heroes.map(hero => (
                    <div key = {hero.id}>
                        <Link style={{textDecoration: 'none'}} href={`/details/${hero.id}`}>
                            <div style={{marginLeft: '20px'}}>
                            <Button type="primary" style={{padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px',}} > {hero.name}</Button>
                            </div>
                            </Link>
                    </div>
                ))}
            </ul>
        </MainLayout>
        )
}