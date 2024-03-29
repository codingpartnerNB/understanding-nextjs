import { useRouter } from "next/router";
import { Fragment } from "react";

const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
];

const Developer = ()=>{
    const router = useRouter();
    const id = router.query.devId;
    // console.log(typeof id);
    const developer = details.find((item)=>item.id === +id);
    // console.log(developer);
    return(
        <Fragment>
            <h1 style={{color: "red"}}>Developer : {id}</h1>
            {developer ? (<>
                    <h3 style={{color: "brown"}}>Name : {developer.name}</h3>
                    <p style={{color: "gray"}}>Role : {developer.role}</p>
                </>
            ) : <p style={{color: "brown"}}>
                    Developer doesn't exist
                </p>
            }
        </Fragment>
    );
}

export default Developer;