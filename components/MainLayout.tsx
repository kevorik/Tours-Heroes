import Link from "next/link";
import styled from "styled-components";
import {Button, Space} from 'antd'




const Title = styled.h1`
    color: red;
    display: flex;
    justify-content: center;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 820px;
    margin-right: 820px;
`;


const Span = styled.span`
    color: white;
`;



export function MainLayout ({children} : any) {
    return(
        <>
        <Title style={{color: 'red',display: 'flex', justifyContent: 'center'}}>Tour of Heroes</Title>
            <Nav style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginLeft: '820px',marginRight: '820px'}}>
                <Link style={{textDecoration: 'none'}} href={'/dashboard'}>
                    <Space wrap>
                    <Button style={{display:'flex'}}>Dashboard</Button>
                    </Space>
                    </Link>
                <Link style={{textDecoration: 'none'}} href={'/heroes'}>
                    <Space wrap>
                    <Button style={{display:'flex'}}>Heroes</Button>
                    </Space>
                    </Link>
            </Nav>
            <main>
                {children}
            </main>
        </>
    )
}