let value: any = "typescript";
let stringLength: number = (value as string).length;
let length2: number = (<string>value).length;

const img = document.querySelector("#img1") as HTMLImageElement;

img.src = "./img/1.jpg";
