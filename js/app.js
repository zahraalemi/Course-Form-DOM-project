/************* DOM Element ************/

const customerInput = document.querySelector('.customer-name');
const courseInput = document.querySelector('.course-name');
const authorInput = document.querySelector('.author-name');
const btnDisable = document.getElementById("add-btn");
const formAdd = document.querySelector('.add-form');
const listCourse = document.querySelector('.list-card');
let courses = [];



/********** Events **********/
document.addEventListener("DOMContentLoaded", loadPage);
formAdd.addEventListener("submit", addCourse);
formAdd.addEventListener("keydown", disableBtn);



/********** function **********/
function loadPage(){
    disableBtn();
    showCard();
    
    

}
function disableBtn(){
    
    if(customerInput.value == '' || courseInput.value == '' || authorInput.value == ''){
        btnDisable.disabled = true;
        
    }
    if(customerInput.value !== '' & courseInput.value !== '' & authorInput.value !== ''){
        btnDisable.disabled = false;
        
    }
}

function addCourse(){
    loadingTimer();
    event.preventDefault();

    let imageSrc = `cust-${Math.floor(Math.random() * 6)}.jpg`;
    
    const registerList = {
        customerName: customerInput.value,
        courseName: courseInput.value,
        authorName: authorInput.value,
        imageName: imageSrc,
      };
      
    courses.push(registerList);
    localStorage.setItem('idCourse', JSON.stringify(courses));
      console.log(courses)

    showCard();
    customerInput.value = '';
    courseInput.value = '';
    authorInput.value = '';
    disableBtn();
    customerInput.style.borderColor = '';
    courseInput.style.borderColor = '';
    authorInput.style.borderColor = '';


    
}
function loadingTimer() {
    document.getElementById("loading").style.display = 'inline-block';
    document.querySelector('.loading-calc').style.display = 'block';
    setTimeout(endLoading, 2000);
  }

function endLoading() {
    document.getElementById("loading").style.display = 'none';
    document.querySelector('.loading-calc').style.display = 'none';
    
}

function showCard(){
    dataLocalStorage();
    let htmlCode = '';
    courses.forEach(function (registerList){ 
    htmlCode += `
        <div class="card">
            <picture><img class="card-img" src="img/${registerList.imageName}" alt=""></picture>
            <div class="details">
                <p><span class="name title"> Name : </span> <span class="name-detail">${registerList.customerName}</span></p>
                <p><span class="course title"> Course : </span> <span class="course-detail">${registerList.courseName}</span></p>
                <p><span class="author title"> Author : </span> <span class="author-detail">${registerList.authorName}</span></p>
            </div>
        </div>`;
})
    listCourse.innerHTML = htmlCode;
}

function dataLocalStorage(){
    if(localStorage.getItem('idCourse')){
        courses = JSON.parse(localStorage.getItem('idCourse'));
    }
    return courses;
}





customerInput.addEventListener('blur', function(){

    if(customerInput.value !== ''){
        customerInput.style.borderColor = 'green';
    }else{
        customerInput.style.borderColor = 'red';
    }
});
courseInput.addEventListener('blur', function(){
    if(courseInput.value !== ''){
        courseInput.style.borderColor = 'green';
    }else{
        courseInput.style.borderColor = 'red';
    }
});
authorInput.addEventListener('blur', function(){
    if(authorInput.value !== ''){
        authorInput.style.borderColor = 'green';
    }else{
        authorInput.style.borderColor = 'red';
    }
});