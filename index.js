


window.addEventListener('load', ()=>{


    const studentsList = [
        {
          internName: 'John Doe',
          companyName: 'Tech Solutions Inc.',
          projectName: 'Website Redesign',
          startDate: '2023-01-01',
          endDate: '2023-03-31',
          pronoun: 'he',
          possessivePronoun: 'his'
        },
        {
          internName: 'Emily Smith',
          companyName: 'Data Analytics Co.',
          projectName: 'Data Visualization Tool',
          startDate: '2023-02-15',
          endDate: '2023-05-15',
          pronoun: 'she',
          possessivePronoun: 'her'
        },
        {
          internName: 'Alex Johnson',
          companyName: 'AI Innovations Ltd.',
          projectName: 'Machine Learning Algorithm',
          startDate: '2023-03-10',
          endDate: '2023-06-30',
          pronoun: 'he',
          possessivePronoun: 'his'
        },
        {
          internName: 'Taylor Brown',
          companyName: 'Cybersecurity Solutions Co.',
          projectName: 'Network Security Audit',
          startDate: '2023-04-20',
          endDate: '2023-08-15',
          pronoun: 'they',
          possessivePronoun: 'their'
        },
        {
          internName: 'Sophia Lee',
          companyName: 'E-commerce Enterprises',
          projectName: 'Mobile App Development',
          startDate: '2023-05-05',
          endDate: '2023-09-30',
          pronoun: 'she',
          possessivePronoun: 'her'
        }
      ];
    
    
      const issuerData = [
       {
          name: 'Alex Johnson',
          companyName: 'Tech Innovations Ltd.',
          position: 'Data Scientist',
          date: '2023-03-10'
        }
      ];
     

    
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
   
       const { internName,
           companyName,
           projectName,
           startDate,
           endDate,
           pronoun,
           possessivePronoun} = studentsList[0];
        
      
   
           internNameEl.forEach((element)=> element.innerHTML = internName);
           companyNameEl.forEach((element)=> element.innerHTML = companyName);
           projectNameEl.forEach((element)=> element.innerHTML = projectName);
           startDtEl.forEach((element)=> element.innerHTML = startDate);
           endDtEl.forEach((element)=> element.innerHTML = endDate);
           pronounEl.forEach((element)=> element.innerHTML = pronoun);
           possessivePronounEl.forEach((element)=> element.innerHTML = possessivePronoun);


   }


   const issuerDetails = (issuerData) => {

   const {  name,
   companyName,
   position,
   date } = issuerData[0]
    
       issuerNameEl.forEach((element)=> element.innerHTML = name);
       issuerPositionEl.forEach((element)=> element.innerHTML = companyName);
       issuerCompanyEl.forEach((element)=> element.innerHTML = position);
       todayDateEl.forEach((element)=> element.innerHTML = date);
   }



   newCerticate(studentsList);
   issuerDetails(issuerData);
   

   
})


   

