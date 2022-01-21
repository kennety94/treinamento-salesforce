public with sharing class MoviesController {
    

    @AuraEnabled(cacheable=true)
    public static List<Filme__c> getContactMovies(Id contactId) {
        return [SELECT Name, Diretor__c, Ano__c, Genero__c
                FROM Filme__c
                WHERE Contact__c =: contactId];
    }

}
