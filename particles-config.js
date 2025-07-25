// particles-config.js

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // パーティクルの数
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ffff" // パーティクルの色 (シアン)
    },
    "shape": {
      "type": "circle", // 形
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff00ff", // 線を繋ぐ色 (マゼンタ)
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4, // 動く速さ
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // カーソルを合わせるとパーティクルが逃げる
      },
      "onclick": {
        "enable": true,
        "mode": "push" // クリックするとパーティクルが追加される
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100, // 逃げる距離
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4 // 追加される数
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
