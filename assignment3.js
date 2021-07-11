s="At noon madam will teach malayalam"
s=s+" "
word=""
for (f of s){
  if(f!=" "){
  word=word+f
  }

else{
  rev=word.split("").reverse().join("")
  if (rev==word){
    console.log(word)
    }
    word=""
  }
}