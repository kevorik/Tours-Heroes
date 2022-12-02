import React, { useEffect,    useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Router, useRouter } from "next/router";
import { IHero } from "../../models";
import {Button, Space, Input} from 'antd'
import { EnterOutlined, CheckCircleOutlined,UserOutlined} from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Successful!')

        const JSONdata = JSON.stringify(heroObj)
        console.log('asd', heroObj);
        
        const options = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            },
            body: JSONdata,
        }    
       try {
        const response = await fetch(`${process.env.API_URL}/heroes/${router.query.id}`,options)
        const result = await response.json()           
       } catch (err) {
        console.log('err', err);
       }
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
            <h1 style={{display: 'flex', justifyContent: 'center'}}>{name} details!</h1>
            <h2 style={{fontSize: '28px',display: 'flex',justifyContent: 'inherit',marginRight: '130px'}}>id: {id}</h2>

            <h1 style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',marginLeft: '130px'}}>
                <span style={{fontSize: '28px'}}>name: </span>  
                <div style={{paddingLeft: '10px',display: 'flex'}}>
            <Input style = {{width: '250px'}}
                size="large"
                placeholder="Name"
                prefix={<UserOutlined />}
                value={name} 
                onChange={handleUpdateHero}
            />
            </div>
            </h1>
            <h4 style={{display: 'flex',justifyContent: 'center',height: '35px',marginLeft: '150px'}}>
            <Space direction="vertical">
            <Space wrap>
            <Button type="primary" icon={<EnterOutlined />} onClick = {linkClickHandler}>Back Dashboard</Button>
            <Button type="primary" icon={<EnterOutlined />} onClick={() => router.push('/heroes')}>Back Heroes</Button>
            <Button type="primary" icon={<CheckCircleOutlined />} onClick={save}>Save</Button>
            <ToastContainer/>
            </Space>
            </Space>
            </h4>
            </div>
            </React.Fragment>
        </MainLayout>
    )
    }


