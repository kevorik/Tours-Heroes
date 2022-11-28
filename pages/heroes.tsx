import Link from "next/link"
import styled from 'styled-components';
import { MainLayout } from "../components/MainLayout";

const Div = styled.div`
    display:flex;
    
`;
const Name = styled.div`
    padding-left: 8px;
    display: flex;
    align-items: center;
    margin-top: 7px;
    border: 1px solid gray;
    padding: 5px 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 10px;
    background-color: lightgrey;
    color: black;
    width: 70px;
`;


const Span = styled.span`
    border: 1px solid grey;
    background-color: #62639B;
    color: white;
    margin-top: 7px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const Id = styled.div`
    padding: 5px 5px;
`;

const Ul = styled.ul`
    padding-left: 10px;
    width: 156px;
`;


type THeroes = {
    heroes: { "id": number, "name": string }[];
};

export default function Heroes({heroes}: THeroes) {

        
    return (
        <MainLayout>
        <h1>My Heroes</h1>
        <Ul>
            {heroes.map(hero => (
                <div key = {hero.id}>
                    <Link style={{textDecoration: 'none'}} href={`/details/${hero.id}`}>
                        <Div>
                        <Span>
                        <Id>{hero.id}</Id>
                        </Span>
                        <Name> {hero.name}</Name>
                        </Div>
                        </Link>
                        
                        
                </div>
            ))}
        </Ul>
        </MainLayout>
    )
}

Heroes.getInitialProps = async () => {
    const response = await fetch( 'http://localhost:4000/heroes')
    const heroes = await response.json()

    return {
        heroes
    }
}