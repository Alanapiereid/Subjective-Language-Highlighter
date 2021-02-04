function myFunction() {
    //var m_list = ['that', 'idiot', 'fraud', 'malevolent'];
    var sent = document.getElementById("sent").value;
    var text_out = []      
    var splitsent = sent.split(" ");
  
    for (var i = 0; i < splitsent.length; i++) {
      if(strong_subjective.includes(splitsent[i].toLowerCase())) {text_out = text_out + splitsent[i] + " "
    }
    document.getElementById("printstate").innerHTML = "The following words are considered subjective:"
    document.getElementById("popup").innerHTML = text_out;
  }
  
  }
