export class imageHelper {
    public onChange = (e: any) => {
        let fileName;
        let fileNew;
        let imageUrl;
        let image;
        const file = e;
        this.getBase64(file)
          .then((result) => {
            image = result;
          })
          .catch(e => console.log(e));
        fileName = file.name;
        fileNew = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          imageUrl = reader.result;
        };
    return {image: image, fileName: fileName, file: fileName, imageUrl: imageUrl} 
      }
      getBase64 = (file: any) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error');
      });

  preview(files: any): any {
    let object = {imagePath: {}, imgURL: '', message: '', image: {}};
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;

    this.getBase64(files[0])
    .then((result: any) => {
        object.image = result;
    })
    .catch(e => console.log(e));
    if (mimeType.match(/image\/*/) == null) {
        object.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    object.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        object.imgURL = String(reader.result); 
    }
     setTimeout(() => {
         return object
        }, 45);
     return object
  }
}