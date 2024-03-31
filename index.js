
window.addEventListener('load', () => {

let i = 0;

  // Student Data Elements 
  const internNameEl = document.querySelectorAll('.intern-name');
  const companyNameEl = document.querySelectorAll('.company-name');
  const projectNameEl = document.querySelectorAll('.project');
  const startDtEl = document.querySelectorAll('.int-start-dt');
  const endDtEl = document.querySelectorAll('.int-end-dt');
  const pronounEl = document.querySelectorAll('.intern-noun');
  const possessivePronounEl = document.querySelectorAll('.intern-p-noun');

  // Issuer Data Elemenets

  const issuerNameEl = document.querySelectorAll('.issuer-name');
  const issuerPositionEl = document.querySelectorAll('.issuer-position');
  const issuerCompanyEl = document.querySelectorAll('.company-name');
  const todayDateEl = document.querySelectorAll('.today-date');

  const newCerticate = (studentsList) => {


    const {
      internName,
      companyName,
      projectName,
      startDate,
      endDate,
      pronoun,
      possessivePronoun } = studentsList[i++];

    console.log(studentsList);

    internNameEl.forEach((element) => element.innerHTML = internName);
    internNameEl.forEach((element) => element.style.color = 'red');
    companyNameEl.forEach((element) => element.innerHTML = companyName);
    projectNameEl.forEach((element) => element.innerHTML = projectName);
    startDtEl.forEach((element) => element.innerHTML = startDate);
    endDtEl.forEach((element) => element.innerHTML = endDate);
    pronounEl.forEach((element) => element.innerHTML = pronoun);
    possessivePronounEl.forEach((element) => element.innerHTML = possessivePronoun);

    if(i >= 5){

      clearInterval(time);
    }

  }


  const issuerDetails = (issuerData) => {

    const {
      name,
      companyName,
      position,
      date } = issuerData[0]

    issuerNameEl.forEach((element) => element.innerHTML = name);
    issuerPositionEl.forEach((element) => element.innerHTML = companyName);
    issuerCompanyEl.forEach((element) => element.innerHTML = position);
    todayDateEl.forEach((element) => element.innerHTML = date);
  }

  const data = () => {

    newCerticate(studentsList);
    issuerDetails(issuerData);
  }

  // const time = setInterval(data, 2000);


  data();

})




