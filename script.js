let humicon = document.getElementsByClassName("fa-bars")[0];
let menus = document.getElementsByClassName("menu")[0];
let close = document.getElementsByClassName("fa-xmark")[0];
let course = document.getElementsByClassName("courses")[0];
let iconangledown = document.getElementsByClassName("fa-angle-down")[0];
let courseItem = document.getElementsByClassName("course-item")[0];

if (humicon) {
  humicon.addEventListener("click", function () {
    menus.classList.add("menu-active");
    humicon.classList.add("fa-bars-remove");
    document.body.classList.add("blur-active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    menus.classList.remove("menu-active");
    if (humicon) humicon.classList.remove("fa-bars-remove");
    document.body.classList.remove("blur-active");
  });
}

if (course) {
  course.addEventListener("click", function () {
    courseItem.classList.toggle("course-items-active");
    iconangledown.classList.toggle("fa-angle-down");
    iconangledown.classList.toggle("fa-angle-up");
  });
}

const cnicInput = document.getElementById("cnic-no");

if (cnicInput) {
  cnicInput.addEventListener("input", function (e) {
    let input = e.target;

    let value = input.value.replace(/\D/g, "").substring(0, 13);

    let formattedValue = "";
    if (value.length > 0) {
      formattedValue = value.substring(0, 5);
    }
    if (value.length > 5) {
      formattedValue += "-" + value.substring(5, 12);
    }
    if (value.length > 12) {
      formattedValue += "-" + value.substring(12, 13);
    }

    input.value = formattedValue;
  });
}

const countryData = {
  Pakistan: ["Karachi", "Lahore", "Islamabad", "Quetta"],
  Turkey: ["Istanbul", "Ankara", "Izmir", "Bursa"],
  Iran: ["Tehran", "Mashhad", "Isfahan", "Tabriz"],
};

const courseData = {
  Karachi: [
    "Graphic Design With Ai",
    "Web App Development",
    "Shopify Ecommerce",
  ],
  Lahore: [
    "Graphic Design With Ai",
    "Web App Development",
    "Shopify Ecommerce",
  ],
  Islamabad: [
    "Graphic Design With Ai",
    "Web App Development",
    "Shopify Ecommerce",
  ],
  Quetta: [
    "Graphic Design With Ai",
    "Web App Development",
    "Shopify Ecommerce",
  ],
  Istanbul: ["Web Development", "Graphic Design"],
  Ankara: ["Web Development", "Graphic Design"],
  Izmir: ["Web Development", "Graphic Design"],
  Bursa: ["Web Development", "Graphic Design"],
  Tehran: ["Web Development", "Graphic Design"],
  Mashhad: ["Web Development", "Graphic Design"],
  Isfahan: ["Web Development", "Graphic Design"],
  Tabriz: ["Web Development", "Graphic Design"],
};

const campusData = {
  Karachi: ["Bahadurabad Campus", "Gulshan Campus", "Numaish Campus"],
  Lahore: ["Gulberg Campus", "DHA Campus", "Johar Town Campus"],
  Islamabad: ["Blue Area Campus", "F-10 Markaz Campus"],
  Quetta: ["Jinnah Road Campus", "Zarghoon Road Campus"],
  Istanbul: ["Taksim Campus", "Besiktas Campus"],
  Ankara: ["Kizilay Campus", "Cankaya Campus"],
  Izmir: ["Konak Campus", "Bornova Campus"],
  Bursa: ["Osmangazi Campus", "Nilufer Campus"],
  Tehran: ["Azadi Campus", "Valiasr Campus"],
  Mashhad: ["Imam Reza Campus", "Ahmadabad Campus"],
  Isfahan: ["Naghsh-e Jahan Campus", "Charbagh Campus"],
  Tabriz: ["Saat Tower Campus", "Elgoli Campus"],
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const genderSelect = document.getElementById("gender");
const courseSelect = document.getElementById("course");
const campusSelect = document.getElementById("campus");

if (countrySelect && citySelect && genderSelect) {
  for (let country in countryData) {
    let option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.appendChild(option);
  }

  countrySelect.addEventListener("change", function () {

    genderSelect.innerHTML = '<option value="">Select gender</option>';
    genderSelect.disabled = true;

    if (this.value) {
      let genders = ["Male", "Female"];
      genders.forEach(function (gender) {
        let option = document.createElement("option");
        option.value = gender;
        option.text = gender;
        genderSelect.appendChild(option);
      });
      genderSelect.disabled = false;
    }

    citySelect.innerHTML = '<option value="">Select City</option>';
    citySelect.disabled = true;

    if (courseSelect) {
      courseSelect.innerHTML = '<option value="">Select Course</option>';
      courseSelect.disabled = true;
    }
    if (campusSelect) {
      campusSelect.innerHTML = '<option value="">Select Campus</option>';
      campusSelect.disabled = true;
    }
  });

  genderSelect.addEventListener("change", function () {
    let selectedGender = this.value;
    let selectedCountry = countrySelect.value;

    citySelect.innerHTML = '<option value="">Select City</option>';
    citySelect.disabled = true;

    if (courseSelect) {
      courseSelect.innerHTML = '<option value="">Select Course</option>';
      courseSelect.disabled = true;
    }
    if (campusSelect) {
      campusSelect.innerHTML = '<option value="">Select Campus</option>';
      campusSelect.disabled = true;
    }

    if (selectedGender && selectedCountry && countryData[selectedCountry]) {
      let cities = countryData[selectedCountry];
      cities.forEach(function (city) {
        let option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
      });
      citySelect.disabled = false;
    }
  });

  citySelect.addEventListener("change", function () {
    let selectedCity = this.value;

    if (courseSelect) {
      courseSelect.innerHTML = '<option value="">Select Course</option>';
      courseSelect.disabled = true;

      if (selectedCity && courseData[selectedCity]) {
        let courses = courseData[selectedCity];
        courses.forEach(function (course) {
          let option = document.createElement("option");
          option.value = course;
          option.text = course;
          courseSelect.appendChild(option);
        });
        courseSelect.disabled = false;
      }
    }

    if (campusSelect) {
      campusSelect.innerHTML = '<option value="">Select Campus</option>';
      campusSelect.disabled = true;
    }
  });

  if (courseSelect && campusSelect) {
    courseSelect.addEventListener("change", function () {
      let selectedCourse = this.value;
      let selectedCity = citySelect.value;

      // Course select hone par Campus populate aur enable karein
      campusSelect.innerHTML = '<option value="">Select Campus</option>';
      campusSelect.disabled = true;

      if (selectedCourse && selectedCity && campusData[selectedCity]) {
        let campuses = campusData[selectedCity];
        campuses.forEach(function (campus) {
          let option = document.createElement("option");
          option.value = campus;
          option.text = campus;
          campusSelect.appendChild(option);
        });
        campusSelect.disabled = false;
      }
    });
  }
}


const inputs = document.querySelectorAll('.otp input');

function handleKey(e, index){
    // sirf numbers allow
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
        e.preventDefault();
        return;
    }

    // agar already number hai to dusra allow nahi
    if (/[0-9]/.test(e.key) && inputs[index].value !== "") {
        e.preventDefault();
        return;
    }

    // backspace par peeche focus
    if (e.key === "Backspace" && inputs[index].value === "" && index > 0) {
        inputs[index - 1].focus();
    }

    // next box par auto focus
    setTimeout(() => {
        if (inputs[index].value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    }, 10);
}
