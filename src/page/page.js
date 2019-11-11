import React, { Component } from 'react';
import PageProfil from "../profil/pageprofil";
import "./page.css"

export default class Page extends Component{

    render(){
        return(
            <div className="container">
                <div>
                    <PageProfil />
                </div>
            </div>
        );
    }
}