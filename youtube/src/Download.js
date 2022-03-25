import React from 'react'
import { render } from 'react-dom'


export default class Download extends React.Component{
    render(){
        return(
            <div>
                <Process  />
            </div>
        )
    }
}


export async function Process(props){
    return (fetch(props))
    .then(promise =>{
        JSON.stringify(promise)
        return promise.json()
    })

    .then(promise =>{
        // do something with that promise
    })
}