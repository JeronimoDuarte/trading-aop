export class CompanyModel {
    constructor(public readonly symbol: string, public readonly  name: string){        
    }
    
    public getAlphabeticalCompanyNames(companies: CompanyModel[]): CompanyModel[] {
        const data = companies.filter(companies => companies.name.includes("a")).sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          
          return data;
    }
}