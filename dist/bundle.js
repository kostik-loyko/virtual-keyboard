(()=>{"use strict";const e=document.querySelector("body"),t=document.createElement("textarea");t.classList.add("textarea"),t.setAttribute("autofocus","autofocus");const o=document.createElement("div");o.classList.add("keyboard");const a=document.createElement("ul");a.classList.add("keys");const r=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"];e.appendChild(t),e.appendChild(o),o.appendChild(a);document.addEventListener("keydown",(e=>{"CapsLock"===e.code&&("true"!==localStorage.getItem("sizeLetter")?localStorage.setItem("sizeLetter","true"):localStorage.setItem("sizeLetter","false"),location.reload())})),0===localStorage.length&&localStorage.setItem("sizeLetter","false");const l=e=>{e.forEach((e=>{let t=document.createElement("li");t.classList.add("key"),t.textContent=e,a.appendChild(t)}))};"en"===localStorage.getItem("lang")?"false"===localStorage.getItem("sizeLetter")?l(["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Delete","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","ArrowUp","Shift","Control","Meta","Alt","Space","Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]):l(["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","Delete","CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter","Shift","Z","X","C","V","B","N","M",",",".","/","ArrowUp","Shift","Control","Meta","Alt"," ","Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]):"false"===localStorage.getItem("sizeLetter")?l(["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Delete","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",".","ArrowUp","Shift","Control","Meta","Alt"," ","Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]):l(["Ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\","Delete","CapsLock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",".","ArrowUp","Shift","Control","Meta","Alt"," ","Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]);const n=document.querySelectorAll(".key");document.addEventListener("keydown",(e=>{n.forEach(((o,a)=>{r[a]===e.code&&(o.classList.add("active"),1===o.textContent.length&&(e.preventDefault(),t.value=t.value+o.textContent),"Tab"===o.textContent&&(e.preventDefault(),t.value=t.value+"    "),"Alt"===o.textContent&&(e.preventDefault(),t.value=t.value+""))}))})),document.addEventListener("keyup",(e=>{n.forEach(((t,o)=>{r[o]===e.code&&t.classList.remove("active")}))}));document.addEventListener("keydown",(e=>{e.altKey&&e.ctrlKey&&("ru"!==localStorage.getItem("lang")?localStorage.setItem("lang","ru"):localStorage.setItem("lang","en"),location.reload())})),0===localStorage.length&&localStorage.setItem("lang","en")})();