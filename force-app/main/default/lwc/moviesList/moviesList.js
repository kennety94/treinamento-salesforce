import { LightningElement,  api, wire, track  } from 'lwc';
import getMovies from "@salesforce/apex/MoviesController.getContactMovies";


const columns = [
  { label: 'Título', fieldName: 'Name' },
  { label: 'Ano', fieldName: 'Ano__c' },
  { label: 'Diretor', fieldName: 'Diretor__c' },
  { label: 'Gênero', fieldName: 'Genero__c' },
];

export default class MoviesList extends LightningElement {

  @api recordId;
  columns = columns;

  @track moviesList;

  @wire( getMovies, { contactId: '$recordId' } )
  movies({ data, error }){
    if(data){
      this.moviesList = data;
      console.log('Retorno', JSON.stringify(data));
    } else if(error) {
      console.error(error);
    }
  }

}