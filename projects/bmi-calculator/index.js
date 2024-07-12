const form = document.querySelector("form#caculateForm");
const result = document.querySelector("div.result");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    if(height == "" || height <= 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }else if(weight == "" || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }else{
        const bmi = (weight/(height*height)).toFixed(2);
        switch(true) {
            case bmi < 18:
                result.innerHTML = `Your BMI is: ${bmi}. You are <b>Underweight</b>`;
              break;
            case bmi > 24:
                result.innerHTML = `Your BMI is: ${bmi}. You are <b>Overweight</b>`;
              break;
            case bmi > 24 && bmi < 18:
                result.innerHTML = `Your BMI is: ${bmi}. You are <b>Normal</b>`;
              break;
            default:
                result.innerHTML = `Your BMI is: ${bmi}. Some thing went wrong`;
          }
    }
})