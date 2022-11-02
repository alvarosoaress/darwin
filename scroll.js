const sections = document.querySelectorAll(".sec")
const secdiv = document.querySelectorAll(".sec-div")
let positionView = ''
let navPos = document.querySelectorAll(".a-nav")
let positionId = ''


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        threshold: 0.5,
    }
)

sections.forEach(sec => {
    observer.observe(sec)

})

secdiv.forEach(div => {
    observer.observe(div)
})

function removePoint(){
    for (let i = 0; i < navPos.length; i++) {
        navPos[i].classList.remove("view");
    }
}

updateWaypoints()

function updateWaypoints(){
var waypointI = new Waypoint({
    element: document.getElementById('sec-summary'),
    handler: function() {
        removePoint()
        const a0 = document.getElementById('a-0')
        a0.classList.add("view");
    }
  })

var waypoint = new Waypoint({
    element: document.getElementById('sec-1'),
    handler: function() {
        removePoint()
        const a1 = document.getElementById('a-1')
        a1.classList.add("view");
    }
  })

var waypoint2 = new Waypoint({
    element: document.getElementById('sec-2'),
    handler: function() {
        removePoint()
        const a2 = document.getElementById('a-2')
        a2.classList.add("view");
    }
  })

var waypoint3 = new Waypoint({
    element: document.getElementById('sec-3'),
    handler: function() {
        removePoint()
        const a3 = document.getElementById('a-3')
        a3.classList.add("view");
    }
  })
}