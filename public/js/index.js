// <!--SCHOLARSHIPS--------------------------------------------->

    // const searchaddon = document.getElementById("search-addon");
    const displayContainer = document.getElementById("displayContainer");
    // let userDetails;
    // searchaddon.addEventListener("click", 
    const search = async (e) => {
        e.preventDefault();
        removeAllChildNodes(displayContainer);
        console.log("clicked");
        let searchInput = document.getElementById("searchInput");
        let name = searchInput.value;
        console.log(name);
        try {
            const response = await fetch("/scholarships/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name }),
            });
            // console.log(response);
            let data = await response.json();
            console.log(data.scholarshipArray[0]);
            // scholarshipsName.innerText = scholarshipsNameReturned;
            // scholarshipDate.innerText = scholarshipsDateReturned;
            const scholarshipsCard = document.createElement("div");
						const scholarshipText = document.createElement("div");
						const scholarshipinner = document.createElement("div");
						const scholarshipLinkDiv = document.createElement("div");
						const scholarshipsName1 = document.createElement("h1");
						const scholarshipDate1 = document.createElement("h2");
						const scholarshiplink = document.createElement("a");
						scholarshiplink.textContent = "Apply";
                        scholarshipsName1.innerText = data.scholarshipArray[0].name;
                        scholarshipDate1.innerText = "Last Date : "+ data.scholarshipArray[0].lastDate;

						scholarshipsName1.setAttribute("class", "scholarshipsName");
						scholarshipDate1.setAttribute("class", "scholarshipDate");
						scholarshipsCard.setAttribute("class", "scholarshipsCard");
						scholarshipinner.setAttribute("class", "scholarshipinner");
						scholarshipLinkDiv.setAttribute("class", "scholarshipLinkDiv");
						scholarshipText.setAttribute("class", "scholarshipText");
						scholarshiplink.setAttribute(
							"class",
							"scholarshipslink btn btn-primary rounded-pill"
						);

						scholarshiplink.setAttribute("href", data.scholarshipArray[0].redirectingLink);
						scholarshipinner.appendChild(scholarshipsName1);
						scholarshipinner.appendChild(scholarshipDate1);
						scholarshipLinkDiv.appendChild(scholarshiplink);

						scholarshipText.appendChild(scholarshipinner);
						scholarshipText.appendChild(scholarshipLinkDiv);
						scholarshipsCard.appendChild(scholarshipText);

						displayContainer.appendChild(scholarshipsCard);

        } catch (error) {
            alert("Scholarship not found!!");
        }
    };

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }


//<!--------------LOGIN-------------------------->
  
            // const signinBtn = document.getElementById("signinBtn");
			// signinBtn.addEventListener("click",
            const loginFunction= async (e) => {
				e.preventDefault();
				let emailInput = document.getElementById("email");
				let passwordInput = document.getElementById("password");
                let errorPasswordDisplay = document.getElementById("error-password");
				try {
					const response = await fetch("/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: emailInput.value,
							password: passwordInput.value,
						}),
					});
                    let data=await response.json()
					if (data.userEmail!=null) {
                        console.log(data.userEmail)
                        localStorage.setItem("userDetails", JSON.stringify(data.userEmail));
						window.location.href = "/";
					} else {
						// Handle unsuccessful response
						errorPasswordDisplay.innerText="Password or email is wrong!!"
					}
				} catch (error) {
					console.error(error);
				}
			};

  //<!-------------REGISTER--------------------------------->

//     const btnRegister = document.getElementById("btnRegister");
//   btnRegister.addEventListener("click",
const registerFunction = async (e) => {
          e.preventDefault();
          let nameInput = document.getElementById("name");
          let lastNameInput = document.getElementById("lastname");
          let emailInput = document.getElementById("email");
          let ageInput = document.getElementById("age");
          let genderInput = document.getElementById("gender");
          let casteInput = document.getElementById("caste");
          let religionInput = document.getElementById("religion");
          let incomeInput = document.getElementById("income");
          let levelOfEducationInput = document.getElementById("mySelect");
          let phoneInput = document.getElementById("phone");
          let districtInput = document.getElementById("district");
          let stateInput = document.getElementById("state");
          let passwordInput = document.getElementById("password");
          let confirmPasswordInput = document.getElementById("confirmpassword");
            const obj ={
                    firstname : nameInput.value,
                      email:emailInput.value,
                      gender:genderInput.value,
                      phone:phoneInput.value,
                      age:ageInput.value,
                      password:passwordInput.value,
                      confirmpassword:confirmPasswordInput.value,
                      income:incomeInput.value,
                      district:districtInput.value,
                      state:stateInput.value,
                      mySelect:levelOfEducationInput.value
            }
            if(casteInput.value!="") obj.caste=casteInput.value;
            if(religionInput.value!="") obj.religion=religionInput.value;
            if(lastNameInput.value!="") obj.lastname=lastNameInput.value;
            console.log(obj)
          try {
              const response = await fetch("/register", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(obj)
              });
              let data = await response.json()
              alert("Registered")
              // const data = await response.json();
          } catch (error) {
              console.error(error);
          }
      };
    
const sortScholarship=async(e)=>{
    e.preventDefault();
    removeAllChildNodes(displayContainer);
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log(userDetails)
    if(userDetails==null){
        console.log("Login / register plz")
    }

    try {
        const response = await fetch("/scholarships/sort", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gender:userDetails.gender,
                age:userDetails.age,
                religion:userDetails.religion,
                caste:userDetails.caste,
                income:userDetails.income,
                district:userDetails.district,
                state:userDetails.state,
                levelOfEducation:userDetails.levelOfEducation
            }),
        });
        let data =await response.json();
        console.log(data.scholarshipArray)
        data.scholarshipArray.forEach((element) => {
            const scholarshipText = document.createElement("div");
            const scholarshipsCard = document.createElement("div");
						const scholarshipinner = document.createElement("div");
						const scholarshipLinkDiv = document.createElement("div");
						const scholarshipsName1 = document.createElement("h1");
						const scholarshipDate1 = document.createElement("h2");
						const scholarshiplink = document.createElement("a");
						scholarshiplink.textContent = "Apply";
                        scholarshipsName1.innerText =  element.name;
                        scholarshipDate1.innerText = "Last Date : "+ element.lastDate;

						scholarshipsName1.setAttribute("class", "scholarshipsName");
						scholarshipDate1.setAttribute("class", "scholarshipDate");
						scholarshipsCard.setAttribute("class", "scholarshipsCard");
						scholarshipinner.setAttribute("class", "scholarshipinner");
						scholarshipLinkDiv.setAttribute("class", "scholarshipLinkDiv");
						scholarshipText.setAttribute("class", "scholarshipText");
						scholarshiplink.setAttribute(
							"class",
							"scholarshipslink btn btn-primary rounded-pill"
						);

						scholarshiplink.setAttribute("href", element.redirectingLink);
						scholarshipinner.appendChild(scholarshipsName1);
						scholarshipinner.appendChild(scholarshipDate1);
						scholarshipLinkDiv.appendChild(scholarshiplink);

						scholarshipText.appendChild(scholarshipinner);
						scholarshipText.appendChild(scholarshipLinkDiv);
						scholarshipsCard.appendChild(scholarshipText);

						displayContainer.appendChild(scholarshipsCard);
           
        });
        
    } catch (error) {
        console.error(error);
    }

} 
const contactusFunction=async(e)=>{
    e.preventDefault();
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let subjectInput = document.getElementById("subject");
    let messageInput = document.getElementById("message");
    console.log("one")
    try {
        const response = await fetch("/contactus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:nameInput.value,
                phone:phoneInput.value,
                email:emailInput.value,
                subject:subjectInput.value,
                message:messageInput.value
            })
        });
        console.log("two")
        let data =await response.json();
        console.log("three")
        alert("Your request has been sent") 
        
    } catch (error) {
        console.error(error);
    }

} 