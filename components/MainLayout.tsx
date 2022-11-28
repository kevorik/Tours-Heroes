import Link from "next/link";
import styled from "styled-components";
import {Button, Space} from 'antd'



const Title = styled.h1`
    color: red;
    font-size: 25px;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    width: 190px;
    justify-content: space-between;
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
                    <Button>Dashboard</Button>
                    </Space>
                    </Link>
                <Link style={{textDecoration: 'none'}} href={'/heroes'}>
                    <Space wrap>
                    <Button>Heroes</Button>
                    </Space>
                    </Link>
            </Nav>
            <main>
                {children}
            </main>
        
        
        </>
    )
}