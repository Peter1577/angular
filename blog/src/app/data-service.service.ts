import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemsList } from './items-list';
import { ProductList } from './product-list';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService  {

  json_url = "https://jsonplaceholder.typicode.com/users";
  json_url1 ="https://jsonplaceholder.typicode.com/todos";
  constructor(private http : HttpClient){

  }
  getdatafromjson():Observable<any[]>{
    return this.http.get<any[]>(this.json_url);
  } 
 
  getdatafromjson1():Observable<any[]>{
    return this.http.get<any[]>(this.json_url1);
  }


   products:ProductList[]=[
   {id:1001,model:'nokia',color:"blue", price:2000,type:"mobile"},
   {id:1001,model:'samsung',color:"white", price:2030,type:"mobile"},
   {id:1001,model:'apple',color:"green", price:2040,type:"mobile"},
   {id:1001,model:'oneplus',color:"red", price:2050,type:"mobile"},
   {id:1001,model:'hp',color:"yellow", price:20300,type:"Laptop"},
   {id:1001,model:'lenovo',color:"grey", price:20500,type:"Laptop"},
   {id:1001,model:'macbook',color:"orange", price:26000,type:"Laptop"},
   {id:1001,model:'acer',color:"light-blue", price:20700,type:"Laptop"},
   {id:1001,model:'oneplus',color:"green", price:20060,type:"bluetooth"},
   {id:1001,model:'noise',color:"red", price:23000,type:"bluetooth"},
   {id:1001,model:'jbl',color:"silver", price:25000,type:"bluetooth"},
   {id:1001,model:'sony',color:"red", price:20400,type:"bluetooth"},
   {id:1001,model:'mobiles',color:"white", price:20040,type:"skin"},
   {id:1001,model:'laptops',color:"blue", price:20400,type:"skin"},
   {id:1001,model:'bluetooths',color:"orange", price:25000,type:"skin"},
   {id:1001,model:'tabs',color:"green", price:20006,type:"skin"},


   
 ]

 getproducts(type:string):Observable<ProductList[]>{
  const product = this.products.filter(p => p.type == type);
  return of (product);
 }
  items : ItemsList[] =[
    {id:1001 , name:"peter" , about:"something " , type:"hotel"},
    {id:1001 , name:"peter1" , about:"something " , type:"hotel"},
    {id:1001 , name:"peter2" , about:"something " , type:"holiday"},
    {id:1001 , name:"peter3" , about:"something " , type:"hotel"},
    {id:1001 , name:"peter4" , about:"something " , type:"hotel"},
    {id:1001 , name:"peter5" , about:"something " , type:"holiday"},
    {id:1001 , name:"peter6" , about:"something " , type:"hotel"},
    {id:1001 , name:"peter7" , about:"something " , type:"holiday"},
  ]

  getdetails(type:string):Observable<ItemsList[]>{
    const item = this.items.filter(i=>i.type == type);

    return of (item);
  }
  
}
