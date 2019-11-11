import React, { Component } from 'react';
import "./pageprofil.css";

export default class PageProfil extends Component {
    constructor(){
        super();
        this.state ={
            color: "white",
            Nom :'Mas',
            Prenom :'Claude',
            DateNaissance : '14/12/1989',
            image : 'https://images.unsplash.com/photo-1414432690990-dd3b7442fd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            contenu :'Nulla quis varius elit. Nulla venenatis pretium vestibulum. Mauris purus dui, interdum tristique eleifend at, consectetur quis lectus. Sed a accumsan quam, in dignissim nulla. Maecenas egestas diam quis lectus ultricies posuere. Etiam feugiat, nibh molestie interdum aliquam, mi neque luctus tortor, eget hendrerit diam orci nec ante. Mauris ultrices metus a ex gravida consectetur. Mauris dictum ligula id nulla volutpat, eu tincidunt arcu aliquam. Nulla et elit ac erat porttitor vehicula. Nulla commodo ex vitae arcu faucibus posuere.',
            count: 0,
            countC: 0,
            countM: 0,
            countJ: 0,
        }
    }

    Jeanne =() => {
      this.setState({
          Nom : 'Masse',
          Prenom : 'Jeanne',
          DateNaissance: '20/12/1987',
          image : 'https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          contenu :'Praesent ut eleifend orci. Donec egestas sodales libero eget condimentum. Ut id diam ut diam rutrum fringilla nec eu nunc. Nullam ornare leo tellus, id commodo velit faucibus eget. Mauris non nibh in massa venenatis vestibulum eget a ante. Fusce rhoncus purus ut tristique varius. Vivamus mattis sapien sed lorem gravida, feugiat malesuada ligula posuere. Nam interdum enim eget imperdiet pharetra.',
          count : this.state.countJ,
      });
    }

    Martine =() => {
        this.setState({
            Nom : 'Mass',
            Prenom : 'Martine',
            DateNaissance: '20/02/1907',
            image:'https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            contenu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus nunc quis velit lacinia egestas. Etiam et urna varius nibh rhoncus sodales eu et lacus. Morbi et elit diam. Suspendisse laoreet quam vitae ex malesuada, et iaculis elit dapibus. Proin maximus volutpat iaculis. Donec dictum, orci nec lobortis malesuada, magna justo placerat est, et tempus tortor odio ut nulla. Nam sollicitudin condimentum dolor et imperdiet. Maecenas sit amet metus facilisis, pellentesque risus et, vestibulum enim. Integer iaculis cursus neque, non rhoncus lorem posuere a.',
            count : this.state.countM,
        });
    }

    Claude =() => {
        this.setState({
            Nom : 'Mas',
            Prenom : 'Claude',
            DateNaissance: '14/12/1989',
            image:'https://images.unsplash.com/photo-1414432690990-dd3b7442fd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            contenu: 'Nulla quis varius elit. Nulla venenatis pretium vestibulum. Mauris purus dui, interdum tristique eleifend at, consectetur quis lectus. Sed a accumsan quam, in dignissim nulla. Maecenas egestas diam quis lectus ultricies posuere. Etiam feugiat, nibh molestie interdum aliquam, mi neque luctus tortor, eget hendrerit diam orci nec ante. Mauris ultrices metus a ex gravida consectetur. Mauris dictum ligula id nulla volutpat, eu tincidunt arcu aliquam. Nulla et elit ac erat porttitor vehicula. Nulla commodo ex vitae arcu faucibus posuere.',
            count : this.state.countC,
          });
    }
    //Méthode Changement de couleur sur la box du profil
    ChangeClick = () => {
      if(this.state.color === "white"){
        this.setState({
          color: '#FE1B00' /**Couleur Rouge */
        });
      }
      else if(this.state.color === "white" || this.state.color === '#FE1B00' ){
        this.setState({
          color: '#9EFD38' /**Couleur Vert */
        });
      }
      else if(this.state.color === "white" || this.state.color === '#FE1B00' || this.state.color === '#9EFD38' ){
        this.setState({
          color: '#F7FF3C' /**Couleur Jaune */
        });
      } 
      else if(this.state.color === "white" || this.state.color === '#FE1B00' || this.state.color === '#9EFD38'|| this.state.color === '#F7FF3C' ){
        this.setState({
          color: '#77B5FE' /**Couleur Bleu */
        });
      }
      else{
        this.setState({
          color: "white"
        });
      }
  }
    //Méthode qui ajoute 1 lorsque l'on clique sur le bouton "C'est super !"
    addOne(){
      if(this.state.Prenom =='Claude'){
        this.setState({
          countC : this.state.countC + 1,
          count: this.state.countC,
        });
      }
      else if(this.state.Prenom =='Martine'){
        this.setState({
          countM : this.state.countM + 1,
          count: this.state.countM,
        });
      }
      else if(this.state.Prenom =='Jeanne'){
        this.setState({
          countJ : this.state.countJ + 1,
          count: this.state.countJ,
        });
      }
  }

    render() { 
        return ( 
            <div>
              <div className="button-group">
                  <button className="button1" onClick={this.Jeanne}>Jeanne</button>
                  <button className="button1" onClick={this.Martine}>Martine</button>
                  <button className="button1" onClick={this.Claude}>Claude</button>
              </div>
              <div id="profil-container" style={{backgroundColor: this.state.color}}>
                  <div className="person-container">
                    <div className="image-container"><img src={this.state.image} alt="img" /></div>
                    <div className="nom">{this.state.Nom}</div>
                    <div className="prenom">{this.state.Prenom}</div>
                    <div className="naissance">{this.state.DateNaissance}</div>
                  </div>
                  <button className="button-change" onClick={this.ChangeClick}>Style</button>
              </div>

              <div className="contenu-container">
                <p className="text-message">
                  {this.state.contenu}
                </p>
                <div className="align">
                  <button className="button2" onClick={ ()=> this.addOne() }>C'est super !</button>
                  <p>{this.state.count}</p>
                </div>
              </div>
            </div>
         );
    }
  }
