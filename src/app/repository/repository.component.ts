import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { PushNotificationsService } from 'angular2-notifications';
// import { RepositoryService } from './repository.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repositories: any = [];
  repository: IRepository = { name: '', description: '' };

  newRepository: IRepository = { name: '', description: '' };

  SelectImagen: Iimagen = {};
  public debug_size_before: string;
  public debug_size_after: string;
  public file_srcs: string;
  constructor(
    // private repoService: RepositoryService,
    public domSanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef,
    // private _pushNotifications: PushNotificationsService
  ) {
    // _pushNotifications.requestPermission();
  }

  ngOnInit() {
    // datos falsos
    /*
     this.repository = { name: "Angular code for CF", description: "proyecto Demo de CF" };
      setTimeout(() => {
       this.repositories = [
         { name: "Java JavaScript", description: "Código con los ejemplos del Curso" },
         { name: "Angular code for CF", description: "proyecto Demo de CF" },
         { name: "Bootstrap", description: "Frontend Fromework" },
         { name: "PHP HTML5", description: "Código lado de servidor " }
       ];
     }, 2000)
     */
    /* setTimeout(() => {
       this.repositories = [];
     }, 5000);
     */
    // datos falsos fin

    //   this.repoService.getRepos().subscribe((data) => {
    //     this.repositories = data.json();

    //     this.repository = this.repositories[0];

    //   });



  }

  // notificacion
  // notify() {
  //   const Options = {
  //     body: 'Después de entrenar durante culta, I´am Iron Man!',
  //     icon: '../../assets/naruto.png',
  //     timeout: 4000,
  //     onclick: function () {
  //       window.location.href = 'https://www.youtube.com/watch?v=s19Mr5AzrmA';
  //       this.close();
  //     }
  //   };
  //       const norify = this._pushNotifications.create('Naruto Shippuden', Options).subscribe(
  //   );
  //   console.log(Options);
  // }


  setMainRepository(repository) {
    this.repository = repository;
  }

  addNewRepo() {
    // console.log(this.newRepository);
    if (this.newRepository.name == null) {
      console.log('Ingrese Nombre');
      return;
    }
    if (this.newRepository.description == null) {
      console.log('Ingrese Nombre');
      return;
    }
    this.repositories.unshift(this.newRepository);

    this.newRepository = { name: '', description: '' };
  }


  // convertir imagen a base64 tamaño orginal

  // onChange_fileChange(event) {
  //   const filesSelected: FileList = event.target.files;
  //   if (filesSelected.length > 0) {
  //     const file: File = filesSelected[0];
  //     const myReader: FileReader = new FileReader();
  //     myReader.onload = (event) => {
  //       this.SelectImagen.imagen = myReader.result;
  //       console.log('base64', this.SelectImagen.imagen);
  //     };
  //     myReader.readAsDataURL(file);
  //   }
  // }



  // -----------------------------
  // convertir imagen a base64 tamaño reducido
  public onChange_fileChange(eventt) {
    const fileList: FileList = eventt.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const ext = file.name.substring(file.name.lastIndexOf('.'));
      const myReader: FileReader = new FileReader();
      myReader.onload = (event) => {
        const img = document.createElement('img');
        img.src = myReader.result;
        this.resize(img, 200, 200, (resized_jpeg, before, after) => {
          this.debug_size_before = (before);
          this.debug_size_after = (after);
          this.file_srcs = (resized_jpeg);
        });
      };
      myReader.readAsDataURL(file);
    }
  }
  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    return img.onload = () => {
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      this.SelectImagen.imagen = dataUrl;
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }
  // ------------------------------

}

interface Iimagen {
  id?: number;
  imagen?: string;
}


/* interface*/
interface IRepository {
  name: string;
  description: string;
}
