import React, { useEffect,    useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Router, useRouter } from "next/router";
import { IHero } from "../../models";
import styled from "styled-components";
import {Button, Space, Input} from 'antd'
import { EnterOutlined, CheckCircleOutlined,UserOutlined} from '@ant-design/icons';

const H1 = styled.h1`
    display: flex;
    flex-direction:row;
    justify-content: inherit;
`;

const Div = styled.div`
    padding-left: 10px;
    display: flex;
`;

// const Input = styled.input`
//     font-size:30px;
//     width: 270px;
// `;

const H2 = styled.h2`
    font-size: 28px;
    display: flex;
    justify-content: inherit;
`;

const Span = styled.span`
    font-size: 28px;
    
`;

const H4 = styled.h4`
    display: flex;
    justify-content: space-between;
    height: 35px;
`;



export default function Details() {

    const router = useRouter()
    const hero = router.query;
    const [id, setId] = useState(hero.id);
    const [name, setName] = useState(hero.name);
    const [heroObj, setHeroObj] = useState<IHero | null>(null);


    async function load() {
        if(router && router.query && router.query.id){
            // const response = await fetch(`${process.env.API_URL}/heroes/${router.query.id}`)
            const response = await fetch(`${process.env.API_URL}/heroes/${router.query.id}`)

            // const response = await fetch(`${baseUrl}/heroes/${router.query.id}`)

            const hero: any = await response.json()
            setName(hero.name)
            setId(router.query.id)
        }

    }
    useEffect(() => {
        load()
    }, [Boolean(router.query.id)])

    

    const linkClickHandler = () => {
        router.push('/dashboard')
        
    }
    async function save() {
        const JSONdata = JSON.stringify(heroObj)

        const options = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSONdata,
        }    
        // const response = await fetch(`https://vercel-pink-nu.vercel.app/heroes/${router.query.id}`, options)
        const response = await fetch(`${process.env.API_URL}/heroes/${router.query.id}`, options)


        // const response = await fetch(`${baseUrl}/heroes/${router.query.id}`, options)
        const result = await response.json()
        
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
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style={{display: 'flex', justifyContent: 'inherit'}}>{name} details!</h1>
            <H2 style={{fontSize: '28px',display: 'flex',justifyContent: 'inherit',marginRight: '130px'}}>id: {id}</H2>

            <H1 style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',marginLeft: '130px'}}>
                <Span style={{fontSize: '28px'}}>name: </Span>  
                <Div style={{paddingLeft: '10px',display: 'flex'}}>
            <Input style = {{width: '250px'}}
                size="large"
                placeholder="Name"
                prefix={<UserOutlined />}
                value={name} 
                onChange={handleUpdateHero}
            />
            </Div>
            </H1>
            <H4 style={{display: 'flex',justifyContent: 'center',height: '35px',marginLeft: '150px'}}>
            <Space direction="vertical">
            <Space wrap>
            <Button type="primary" icon={<EnterOutlined />} onClick = {linkClickHandler}>Back Dashboard</Button>
            <Button type="primary" icon={<EnterOutlined />} onClick={() => router.push('/heroes')}>Back Heroes</Button>
            <Button type="primary" icon={<CheckCircleOutlined />} onClick={save}>Save</Button>
            </Space>
            </Space>
            </H4>
            </div>
            </React.Fragment>
        </MainLayout>
    )
    }


