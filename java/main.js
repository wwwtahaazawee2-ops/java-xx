/* const y=[10,5,30,40];
const x=(num)=>{
    for (let i = 0; i <num.length; i++) {
        if (num[i]>num[i+1]) {
            return false;
        }
        
    }
    return true; 
}
console.log(x(y));
التحقق من ان المصفوفة مرتبة تصاعديا
 */

 
 
/* const isvowel=(c)=>{
    if (c=="a"||c=="e"||
        c=="i"||c=="o"||
        c=="u"||c=="A"||
        c=="I"||c=="O"||
        c=="U"||c=="E")
    return true;
        else
            {
            return false;
        }
                  
    }
     //console.log(isfolse("a"));
     
const removevowels =(str)=>{
    let res="";
for (let i = 0; i <str.length; i++) {
    if (!isvowel(str[i])) {
        res=res+str[i];
    }
   
}
 return res;
}

console.log(removevowels("hello word taha"));
حذف احرف صوتيه */




/* const hanoi=(n,start,middle,end)=>{
    if(n>0){
        hanoi(n-1,start,end,middle);
        console.log("move for " +start+ " to " +end);
        hanoi(n-1,middle,start,end)
    }

}
hanoi(2,"A","B","C"); 
حساب حركات اقراص بستخدام تابع عودي
*/