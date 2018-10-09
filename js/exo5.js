function change(f)
{
  f.src=(!/_2.jpg/.test(f.src))?f.src.slice(0,f.src.length-4)+"_2.jpg":f.src.slice(0,f.src.length-6)+".jpg";
}
