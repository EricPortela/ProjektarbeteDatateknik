function correctQuiz()                                                                      //Create funtion that changes color of the question to show which is right and wrong, also display how many questions the player got right
{
    var amountOfRight = 0;                                                                  //create variable that gets output to p with id amountOfRight

    var spans = document.getElementsByName('q');                                            //get all spans within the document

    for (var i = 0; i < spans.length; i++)                                                  //iterate for all spans
    {
        if (spans[i].id == 'rightText')                                                     //if span id=rightText, change color to green. In other words change all right questions to green
        {
            spans[i].style.color = 'green';
        }
        else {
            spans[i].style.color = 'red';                                                   //if question answer isnt right instead change color to red
        }
    }

    var checkedRight = document.getElementsByName('q1');                                    //gets all radios within the document

    for (var i = 0; i < checkedRight.length; i++)                                            //iterate for every radio
    {
        if (checkedRight[i].id == 'right' && checkedRight[i].checked)                        //check if id of the radio id right, and if it is check if it is selected
        {
            amountOfRight++;                                                                //if the answer was right and selected increase amountOfRight
        }
    }

    document.getElementById("amountOfRight").innerHTML = "Antal rätt: " + amountOfRight + " / 6";                     //change p text to amountOfRight
}