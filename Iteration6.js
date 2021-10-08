/* Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la
posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante */



['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

 function swap(array,i,j){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    console.log(array);
 }
 swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],1,3);
 swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],0,1);