import Link from "next/link"
import styled from 'styled-components';
import { MainLayout } from "../components/MainLayout";

const Title = styled.h1`
    color: red;
    font-size: 25px;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
`;

const P = styled.div`
    margin-left: 15px;
    border: 1px solid gray;
    background-color: blue;
    border-readius: 3px;
    width: 110px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
    color: white;
`;
//gdfgfdgfd

export default function Index() {
    return (
    <MainLayout>

    {/* <Title>Tour of Heroes</Title>
    <Nav>
    <P><Link href={'/dashboard'}><Span>Dashboard</Span></Link></P>
    <P><Link href={'/heroes'}><Span>Heroes</Span></Link></P>
    </Nav> */}
    </MainLayout>
    )
}