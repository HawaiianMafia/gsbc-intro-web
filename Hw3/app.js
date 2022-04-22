let div = document.getElementById('content');
let canvas = document.createElement("canvas");
div.appendChild(canvas);
  <img id="image" src=
"i-am-lost-5cd1a6.jpg"
            alt="Lost Image" />
    </div>
 
    <button type="button"
        onclick="show()" id="btnID">
        Show Image
    </button>
 
    <script>
        function show() {
 
            
            document.getElementById('image')
                    .style.display = "block";
 
            document.getElementById('btnID')
                    .style.display = "none";
        }
    </script>
