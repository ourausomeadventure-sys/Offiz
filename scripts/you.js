(function() {
    const popup = window.open("", "popup", "width=357,height=330,menubar=no,status=no,toolbar=no,resizable=no,titlebar=no");

    popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Hi!</title>
            <style>
                html, body {
                    margin: 0;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                }
                iframe { border: none; }
            </style>
        </head>
        <body>
            <iframe src="https://ourausomeadventure-sys.github.io/Offiz/" width="357" height="330"></iframe>

            <script>
                let xOff = 5;
                let yOff = 5;
                let xPos = 400;
                let yPos = -100;
                let flagRun = true;

                function newXlt() { xOff = Math.ceil(-6*Math.random())*5-10; window.focus(); }
                function newXrt() { xOff = Math.ceil(7*Math.random())*5-10; window.focus(); }
                function newYup() { yOff = Math.ceil(-6*Math.random())*5-10; window.focus(); }
                function newYdn() { yOff = Math.ceil(7*Math.random())*5-10; window.focus(); }

                function playBall() {
                    xPos += xOff;
                    yPos += yOff;
                    if(xPos > screen.width-357) newXlt();
                    if(xPos < 0) newXrt();
                    if(yPos > screen.height-330) newYup();
                    if(yPos < 0) newYdn();
                    if(flagRun){ window.moveTo(xPos,yPos); setTimeout(playBall,10); }
                }

                playBall();
            <\/script>
        </body>
        </html>
    `);
    popup.document.close();
})();
