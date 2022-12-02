import Link from "next/link";
import {Button, Space} from 'antd'


export function MainLayout ({children} : any) {
    return(
        <>
        <h1 style={{color: 'red',display: 'flex', justifyContent: 'center'}}>Tour of Heroes</h1>
            <nav style={{display: 'flex',flexDirection: 'row',justifyContent: 'center'}}>
                <Link style={{textDecoration: 'none'}} href={'/dashboard'}>
                    <Space wrap>
                    <Button style={{display:'flex'}}>Dashboard</Button>
                    </Space>
                    </Link>
                <Link style={{textDecoration: 'none'}} href={'/heroes'}>
                    <Space wrap>
                    <Button style={{display:'flex', marginLeft: '20px'}}>Heroes</Button>
                    </Space>
                    </Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}