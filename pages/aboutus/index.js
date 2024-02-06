import { Fragment } from "react";
import Link from 'next/link';

const AboutUsPage = ()=>{
    //Route -> our-domain.com/aboutus
    return (
        <Fragment>
            <h1 style={{color: "red"}}>About Us Page</h1>
            <ul style={{listStyle: "none"}}>
                <li style={{marginTop: "18px"}}><Link href='/aboutus/1' style={{textDecoration: "none", color: "brown"}}>Yash</Link></li>
                <li style={{marginTop: "18px"}}><Link href='/aboutus/2' style={{textDecoration: "none", color: "brown"}}>Vaibhav</Link></li>
                <li style={{marginTop: "18px"}}><Link href='/aboutus/3' style={{textDecoration: "none", color: "brown"}}>Suresh</Link></li>
            </ul>
        </Fragment>
    );
}

export default AboutUsPage;