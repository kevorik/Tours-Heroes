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
        <Title>Tour of Heroes</Title>
            <Nav>
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