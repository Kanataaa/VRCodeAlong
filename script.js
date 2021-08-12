

AFRAME.registerComponent('change-tree-color', {
    init: function() {
        var sceneEl = document.querySelector("a-scene");
        sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('color', 'purple');
    }
});


AFRAME.registerComponent('change-color-hover', {
    init: function() {
        var snowHead = this.el;

        snowHead.addEventListener('mouseeenter', function() {
            snowHead.setAttribute('color', 'purple');
        })

        snowHead.addEventListener('mouseleave', function() {
            snowHead.setAttribute('color', 'white');
        })
    }
});

AFRAME.registerComponent('cursor-listener', {
    init: function(){
        var colors = ['red', 'green', 'blue', 'yellow', 'purple']
        var snowBody = this.el;
        snowBody.addEventListener("click", function() { 
            var randomIndex = Math.floor(Math.random * colors.length);
        })
    }
});