var totaLvl = 0;

function generateFire(){

    var picNum;
    var picWidth;
    var picHeight;
    var leftSide = document.getElementById('leftSide');
    var rightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName('body')[0];

    for(var i = 0; i < 5;i++)
    {
        var movTop = Math.random() * 400;
        var movLeft = Math.random() * 400;

        var picCreate = document.createElement('img');
        picCreate.src = 'fire.png';
        leftSide.appendChild(picCreate).style.left = movTop + "px";
        leftSide.appendChild(picCreate).style.top = movLeft + "px";
    }

    var leftImg = leftSide.cloneNode(true);
    leftImg.removeChild(leftImg.lastChild);
   

    leftSide.lastChild.onclick =

        function moreFire(event){

            event.stopPropagation();
            generateFire();
        };

    theBody.onclick =

        function gameOver() {

            theBody.onclick = null;
            leftSide.lastChild.onclick = null;
            alert("Game Over! You Won With " + totaLvl + " Levels");
            totaLvl = 0;
            if(confirm("Want to play again?")){

                while (leftSide.firstChild){

                    leftSide.removeChild(leftSide.lastChild);



                }

                rightSide.innerHTML = "";

                generateFire();

            }

        };

    ++totaLvl;


}