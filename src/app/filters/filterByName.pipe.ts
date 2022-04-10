import { Pipe, PipeTransform } from '@angular/core'


@Pipe({ name: 'filterByName' })


export class FilterByNamePipe implements PipeTransform {
// Filter by name
transform(users: any[], searchText: string): any[] {
    if(!users){
      return []
    }
    if(!searchText){
      return users
    }
    searchText = searchText.toLocaleLowerCase();

    return users.filter(it => {
      return it.toLocaleLowerCase().includes(searchText)
    })
  }
}