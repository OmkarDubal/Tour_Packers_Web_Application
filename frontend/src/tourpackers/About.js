

function About() {
  return (
    /* <div class="position-absolute top-0 start-50 translate-middle">
      <h1 class="font-weight-light">About</h1>
        <p p class="marginTop font14 greyDr lh1-5">
          Now a day’s many people are looking for online tourism booking. "Tours and packers" is an integrated web 
          application for tourism business. It is a dynamic and responsive system which let users to decide
          about places they want to visit and make bookings online for travel and accommodation. 
          The purpose is to provide the user all the facilities related to traveling, 
          booking, sightseeing, etc. We connect customers and agents directly, and provide a feedback ff
          mechanism for tourists, and also maintain the database of tourists’ information, and provide users a 
          variety of travel services.  
        </p>
       </div>*/
  <div style={{
    backgroundImage: `url("data:image/jpeg;base64,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")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '140vh',
  }}>
  <div class="grid-container" id="clas">
		<br/><br/><br/><br/>
		<center><h1><b> ABOUT US </b></h1></center>
		<p><h3><b>
          Now a day’s many people are looking for online tourism booking. "Tours and packers" is an integrated web 
          application for tourism business. It is a dynamic and responsive system which let users to decide
          about places they want to visit and make bookings online for travel and accommodation. 
          The purpose is to provide the user all the facilities related to traveling, 
          booking, sightseeing, etc. We connect customers and agents directly, and provide a feedback 
          mechanism for tourists, and also maintain the database of tourists’ information, and provide users a 
          variety of travel services. To know more about us please read the given information .</b></h3>
        </p>
		<br/>
		
		<br/><br/>
			
			<div  id="edu1">
				<center><h2>OUR PRODUCTS</h2></center>
				<tr>
				<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Domestic Hotels &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
        <th>&nbsp;&nbsp;&nbsp;Domestic Flights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;Best Spots To Visit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
        </tr>
			</div><br/><br/>
		  <div class="col-sm-4" id="blank"></div>
			<div id="edu1">
      <center><h2>COMPANY</h2></center>
      <tr>
				<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms of Agreement &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
        <th>&nbsp;&nbsp;&nbsp;Privacy Policies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;Exciting Offers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
        </tr>
			</div>
		<br/><br/>
		
			<div  id="edu1">
				<center><h2>TRAVEL RESOURCES</h2></center>
				<tr>
				<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shortest Routes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Airport Cabs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travel Planner</th></tr>
			</div><br/><br/>
		   <div class="col-sm-4"></div> 
			<div id="edu1">
				<center><h2>MORE LINKS</h2></center>
        <tr>
				<th>Cheap Hotels &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
        <th>Cheap Flights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>Hotels Near me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
        <th>Your Feedback</th></tr>
			</div>
	
		
		<br/><br/>
	<div class="align">
		<center><h1><b>Let Us Take A Look At Some Key Facilities </b></h1></center>
			<li>We have special summer camps planned out for children where we take care of all the saftey measures for them.</li><br/>
			<li>We have a special Healthcare for senior citizen and we have all the important medical supplies with us in case of emergency</li><br/>
			<li>All the bookings are priorly done so that tourists can utilize their whole time for the trip and there won't be any last minute rush.</li><br/>
			<li>We provide special security for women travellers who are travelling alone. We take care of their each and every need.</li><br/>
			<li>We arrange special relaxing sessions for trvellers where they can take rest so they do not get exhausted by the trip.</li><br/>
			<li>We provide one on one attension to our every guest and we provide a 24x7 healthcare Helpline to every person associated with us.</li><br/>
      <li>In our each tour there are some fun indoor as well as outdoor activities planned out for our guests.</li><br/>
      <li>This organization has also undertaken certain steps to make travelling stress-free, appropriate and pliable</li><br/>
      <li>We assure you that your money is not getting wasted. We provide you the exact and detailed distribution of the total amount you paid us.</li><br/>
      <li>We provide you the Hotels and food which only quality assured by 'Tours and Packers'.</li><br/>
	</div>
</div>
</div>


  );
}



export default About;
