var url = "https://sicher.000webhostapp.com/?id=";
var id = "aaa";
var q = "q";

url = url + id;
url = url + "&q="
url = url + q;

var sep = 0;
document.getElementById("out").style="display:none";
//var url = "http://validate.jsontest.com/?json=a";

function report(item, index)
{
    item.name = item.name.replace(/_/g, " ");
    $("#out-title").text(item.name);
    $("#out-txt").text("location: " + item.location + " date: " + item.date);
    var out = document.getElementById("out").cloneNode(true);
    out.style="padding-left:3vw;max-width:70em;height:15vh;margin-top:" + sep + "em";

    w = window.location.href;
    i = window.location.href.length;
    while (window.location.href[i] != '/')
    {
        i--;
    }
    $(out).click(function() {window.open(window.location.href.substring(0, i) + "/t-page.html?p=" + item.name);});
    list.style="margin-bottom:" + (sep + 10) + "em";
    sep = sep + 10;
    document.getElementById("list").appendChild(out);

    if (item.is_public === "1")
    {
        //document.write("public training<br>");
    }
    else
    {
        //document.write("in house training<br>");
    }

    /*document.write("</b>" +
        "date: " + item.date + "<br>" +
        "duration: " + item.duration + "<br>" +
        "price: " + item.price + "<br>" +
        "location: " + item.location + "<br>" +
        "description: " + item.description + "<br>" +
        "</p>"
    );*/
}

$( "#out" ).click(function() {
  alert( "Handler for .click() called." );
});

function run() {
    $.getJSON(
        url,
        function(data) {
            var text = data.status;
            if (data.err)
            {
                text = "SERVER ERROR: " + text;
                alert(text);
            }
            if (id !== data.id)
            {
                text = "AUTH ERROR: IDs do not match";
            }

            //$("#out").text(text);
            data.answer.forEach(report);
        }
    );
}

// We'll run the AJAX query when the page loads.
//$("#out").text("Connecting...");
window.onload=run;
