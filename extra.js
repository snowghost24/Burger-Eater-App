    var id = $("[name=id]").val().trim();
    event.preventDefault();
    dropLi.remove();


    var updatedPlan = {
      plan: $("#updateplan [name=plan]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/eatburger/" + id, {
      type: "PUT",
      data: updatedPlan
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );


    .then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }




<div id="dymoDad">
<div id="dynamicD">


</div>
<div id="dynamicD2"> 

   
   var currentURL = window.location.origin;
   var burgersArray = [];
   // grab submit button for the dom
   var theBtn = document.querySelector("#submitter")
   // add an event listener to button 
   theBtn.addEventListener('click', function () {
      event.preventDefault();
         //push each burger into an array
         burgersArray.push(document.querySelector("#burger-input").value);
         var theD = document.querySelector("#dynamicD");
            theD.innerHTML = "";
         console.log(burgersArray);


         for (var i = 0; i < burgersArray.length; i++) {
        var magicDiv = document.createElement("DIV");
        var magicDiv2 = document.createElement("DIV");
        var buttonText = document.createTextNode(burgersArray[i]);
         var buttonText2 = document.createTextNode(burgersArray[i]);
        magicDiv.classList.add("charged-btn", "btn");
         magicDiv2.classList.add("charged-btn", "btn");
         magicDiv.setAttribute('id',"slider"+i)
         magicDiv2.setAttribute('id',"slider" + i + 1);
         var magicButton = document.createElement("BUTTON");
        var buttonText3 = document.createTextNode("Chow Down");
        magicButton.classList.add("charged-btn", "btn")
        magicButton.appendChild(buttonText3);
        magicDiv.appendChild(buttonText);
         magicDiv2.appendChild(buttonText2);
         magicDiv.appendChild(magicButton);
          document.querySelector("#dynamicD2").appendChild(magicDiv2);
        theD.appendChild(magicDiv);
      }
      

        // place the array inside of an object called burgername
      var sentBurger = {
         burgerName: burgersArray
      }
      // make an ajax call and send back the burgers array as data
      $.ajax({ url: currentURL + "/", method: "POST", data: sentBurger })
         .done(function (passedData) {
         })    
   })

         
      


            // Then display the remaining fields in the HTML (Section Name, Date, URL)
            $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
            
         
         
      

    
   

      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      
    

    function runWaitListQuery() {

      // Here we get the location of the root page.
      // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/waitlist", method: "GET" })
      .done(function(waitlistData) {

        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/api/waitlist");
        console.log("------------------------------------");

        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(waitlistData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < waitlistData.length; i++) {

          // Create the HTML Well (Section) and Add the table content for each reserved table
          var waitlistSection = $("<div>");
          waitlistSection.addClass("well");
          waitlistSection.attr("id", "waitlistWell-" + i + 1);
          $("#waitlistSection").append(waitlistSection);

          var tableNumber = i + 1;

          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#waitlistWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
        }
      });
    }

    // This function resets all of the data in our tables. This is intended to let you restart a demo.
    function clearTable() {

      var currentURL = window.location.origin;
      $.ajax({ url: currentURL + "/api/clear", method: "POST" });

    }

    $("#clear").on("click", function() {
      alert("Clearing...");
      clearTable();

      // Refresh the page after data is cleared
      location.reload();

    });


    // Run Queries!
    // ==========================================
    runTableQuery();
    runWaitListQuery();
*/