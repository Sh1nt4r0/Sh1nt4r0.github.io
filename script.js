 var displayAnswers = function (){
                var name = document.getElementById("idTxtName").value;
                var club = document.getElementById("idTxtClub").value;
                var Sport = document.getElementById("idTxtFavSport").value;
                var output="";
                output += "Your name is " + name + "<br>" + "You are in " + club + "<br>" + "Your favorite sport is " + Sport;
                document.getElementById("divtext").innerHTML = output;
            };