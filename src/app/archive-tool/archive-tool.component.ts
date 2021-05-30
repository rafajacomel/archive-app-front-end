import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService} from  '../api.service';

@Component({
  selector: 'app-archive-tool',
  templateUrl: './archive-tool.component.html',
  styleUrls: ['./archive-tool.component.css']
})
export class ArchiveToolComponent implements OnInit {

  fspids = [] as any;
  fspidsArchived = [] as any;
  changeText = true;
  confirmationMessage ="";

  constructor(
    private apiService : ApiService
    ) { 
    
  }

  ngOnInit(): void {
    this.apiService.getFspids().subscribe(
      data =>{
        this.fspids = data;
      },
      error => console.log(error)
    );
  }

  getTooltopScript(name: any){
    return 'Application name: ' + name.name +
           '\nDownload in last 30 days: ' + name.number_of_last_download +
           '\nActive users: ' + name.number_of_users +
           '\nStatus: ' + name.status;
  }

  archive(){

    this.confirmationMessage = "Do you really want remove the following fspids: \n";
    
    for (var fspid of this.fspidsArchived) {
      this.confirmationMessage = this.confirmationMessage + "\n" +  fspid.fspId;
    }
    if(window.confirm(this.confirmationMessage)){

      window.alert("Fspids archived successfully");
      this.fspidsArchived = [];
     }
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
