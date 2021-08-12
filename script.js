

AFRAME.registerComponent('change-tree-color', {
    init: function() {
        var sceneEl = document.querySelector("a-scene");
        sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('color', 'purple');
    }
});


AFRAME.registerComponent('change-color-on-hover', {
    init: function() {
        var snowHead = this.el;

        snowHead.onmouseenter = function() {
            snowHead.setAttribute('color', 'purple');
        }

        snowHead.onmouseleave = function() {
            snowHead.setAttribute('color', 'white');
        }
    }
});

AFRAME.registerComponent('cursor-listener', {
    init: function(){
       var colors = ['red', 'green', 'blue', 'yellow', 'purple']
       var snowBody = this.el;
       snowBody.addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * colors.length);
        snowBody.setAttribute('color', colors[randomIndex]);
       });
       
    // function changeColors() {
           
    //    }
    }
});

