import React, { useEffect,    useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Router, useRouter } from "next/router";
import { IHero } from "../../models";
import styled from "styled-components";

const H1 = styled.h1`
    display: flex;
    flex-direction:row;
`;

const Div = styled.div`
    padding-left: 10px;
`;

const Input = styled.input`
    font-size:30px;
    width: 270px;
`;

const H2 = styled.h2`
    font-size: 28px;
`;

const Span = styled.span`
    font-size: 28px;
`;

const H4 = styled.h4`
    display: flex;
    width: 384px;
    justify-content: space-between;
    height: 35px;
    bac
`;

const Button = styled.button`
    background-color: aqua;
    border: none;
    border-radius: 8px;
    width: 110px;
    cursor: pointer
`; 





export default function Details() {

    const router = useRouter()
    const hero = router.query;
    const [id, setId] = useState(hero.id);
    const [name, setName] = useState(hero.name);
    const [heroObj, setHeroObj] = useState<IHero | null>(null);
   
    async function load() {
        const response = await fetch(`http://localhost:4000/heroes/${router.query.id}`)
        const hero: any = await response.json()

        setName(hero.name)
    }

    useEffect(() => {
        load()
    }, [Boolean(router)])

    

    const linkClickHandler = () => {
        router.push('/dashboard')
        
    }
    async function save() {
        const JSONdata = JSON.stringify(heroObj)

        console.log('body', heroObj);

        console.log('JSONdata', JSONdata);

        const options = {
            // The method is POST because we are sending data.
            method: 'PUT',
            // Tell the server we're sending JSON.
            headers: {
            'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }
    
        const response = await fetch(`http://localhost:4000/heroes/${router.query.id}`, options)
    
        const result = await response.json()

        console.log('res', response);

        console.log('result', result);
    }

    const handleUpdateHero = (e: any) => {
        const newName = e.target.value;

            const updatedHero = {
                ...heroObj,
                name: newName
            };
            setHeroObj(updatedHero)

            setName(updatedHero.name)
    }



    return(

        <MainLayout>
            <React.Fragment>
            
            <h1>{name} details!</h1>
            <H2>id: {id}</H2>

            <H1>
                <Span>name: </Span>  
                <Div>
            <Input
                placeholder="name"
                value={name} 
                onChange={handleUpdateHero}
            />
            </Div>
            </H1>
            <H4>
            <Button onClick = {linkClickHandler}>Back Dashboard</Button>
            <Button onClick={() => router.push('/heroes')}>Back Heroes</Button>
            <Button onClick={save}>Save</Button>
            </H4>
            </React.Fragment>
        </MainLayout>
    )
    }


