const inputResult = document.getElementById("resultado");
const btnValues = document.querySelectorAll("button");

function reset() {
   inputResult.value = ""
}



btnValues.forEach(
   (element)=>{
      element.addEventListener("click" , ()=>{
         inputResult.value += element.value;

         if (element.id === "igual") {
            inputResult.value = eval(inputResult.value)
         }

         if (element.id === "reset") {
            reset()
         }
      })
   }
)