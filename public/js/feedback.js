//Feedback form front-end for the feedback.ejs view

//find form dom element
//attach event listener to the form dom element
//API call back to server with a fetch call to post data back to server
let form = document.querySelector(".feedback-form");

//e is what the window gives back to the event listener. All the info given from the event.
form.addEventListener("submit", e => {
  e.preventDefault();
  // retrieve values from form
  let name = document.querySelector("#feedback-form-name");
  let title = document.querySelector("#feedback-form-title");
  let message = document.querySelector("#feedback-form-message");

  //This data is a javscript object
  let data = {
    name: name.value,
    title: title.value,
    message: message.value
  };

  fetch("/api", {
    //Change the method of the fetch to post.
    method: "POST",

    //Headers: tells the server what type of data is being sent.
    headers: { "Content-Type": "application/json" },

    //Body holds the data being sent. JSON stringify because the data being sent is a javascript object, so we must convert it to json.
    body: JSON.stringify(data)
  })
    //.then takes the response from the request
    .then(response => {
      //Converts response back to javascript object with response.json()
      return response.json();
    })
    .then(feedbackData => {
      //Now, manipulate the dom with the data which comes in an array of objects.
      updateFeedback(feedbackData);
    });
});

let setUp = () => {
  fetch("/api")
    .then(response => {
      return response.json();
    })
    .then(feedbackData => {
      updateFeedback(feedbackData);
    });
};

let updateFeedback = feedbackData => {
  let feedbackDisplay = document.querySelector("#feedback-results");
  let output = "";
  feedbackData.forEach((item, key) => {
    output += '     <div class="feedback-item item-list media-list">';
    output += '       <div class="feedback-item media">';
    output +=
      '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' +
      key +
      '" class="glyphicon glyphicon-remove"></span></button></div>';
    output += '         <div class="feedback-info media-body">';
    output += '           <div class="feedback-head">';
    output +=
      '             <div class="feedback-title">' +
      item.title +
      ' <small class="feedback-name label label-info">' +
      item.name +
      "</small></div>";
    output += "           </div>";
    output +=
      '           <div class="feedback-message">' + item.message + "</div>";
    output += "         </div>";
    output += "       </div>";
    output += "     </div>";
  });
  feedbackDisplay.innerHTML = output;
};

setUp();
