var alertModalSection = document.getElementById('alertModalSection');
var bookmarkName = document.getElementById('bookmarkName');
var bookmarkUrl = document.getElementById('bookmarkUrl');
var tableContent = document.getElementById('tableContent');
var submitBtn = document.getElementById('submitBtn');
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;


var dataList = []


function onSubmitData(){
var obj = {
    name:bookmarkName.value,
    url:bookmarkUrl.value,
}


if (bookmarkName.value !== '' && bookmarkUrl.value !== '' ) {
    
    dataList.push(obj)
}

if (bookmarkName.value === '' && bookmarkUrl.value === '' ){
    alertModalSection.classList.add('d-flex')
    alertModalSection.classList.remove('d-none')

}

displayData();
    


    bookmarkName.value ='';
    bookmarkUrl.value='';
}


function onView(e){
    console.log(e)
    var item= dataList.filter((_,index) => index.url===e.url);
    console.log(item[0])

   open(item[0].url)
   
    }


   function deletItem(index){

    dataList.splice(index,1);
    displayData();
   }

function displayData(){
    var cartona ='';
    for (let i = 0; i < dataList.length; i++) {
        cartona += ` <tr>
                  <td>${i + 1}</td>
                  <td>${dataList[i].name}</td>              
                  <td>
                    <button class="btn btn-visit" data-index="0" onclick="onView(${i})">
                      <i class="fa-solid fa-eye pe-2"></i>Visit
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-delete pe-2" data-index="0" onclick="deletItem(${i})">
                      <i class="fa-solid fa-trash-can"></i>
                      Delete
                    </button>
                  </td>
              </tr>`;
        
    }

    tableContent.innerHTML = cartona;
}



bookmarkName.addEventListener('input',function (e) {
    console.log(e.target.value);

    var name = e.target.value;
    if (nameRegex.test(name)) {
        bookmarkName.classList.add('is-valid')
        bookmarkName.classList.remove('is-invalid')
    }else{
        bookmarkName.classList.remove('is-valid')
        bookmarkName.classList.add('is-invalid')

    }
    
})


bookmarkUrl.addEventListener('input',function (e) {
    console.log(e.target.value);

    var url = e.target.value;
    if (urlRegex.test(url)) {
        bookmarkUrl.classList.add('is-valid')
        bookmarkUrl.classList.remove('is-invalid')
    }else{
        bookmarkUrl.classList.remove('is-valid')
        bookmarkUrl.classList.add('is-invalid')

    }
    
})

function onClose(){
    alertModalSection.classList.add('d-none')
    alertModalSection.classList.remove('d-flex')

}