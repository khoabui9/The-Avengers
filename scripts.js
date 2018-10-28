var avengers = [{
    name: "Ironman",
    role: "hero",
    description: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
    image: "./image/ironman.jpg"
}, {
    name: "Captain America",
    role: "hero",
    description: "Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 from Timely Comics, a predecessor of Marvel Comics.",
    image: "./image/captain.jpg"
}, {
    name: "Thor",
    role: "hero",
    description: "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    image: "./image/thor.jpg"
}, {
    name: "Hulk",
    role: "hero",
    description: "The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
    image: "./image/hulk.jpg"
}, {
    name: "Spider-Man",
    role: "hero",
    description: "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
    image: "./image/spiderman.jpg"
}, {
    name: "Black Panther",
    role: "hero",
    description: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    image: "./image/blackpanther.jpg"
}, {
    name: "Thanos",
    role: "villain",
    description: "Thanos is a fictional character appearing in American comic books published by Marvel Comics. Created by writer/artist Jim Starlin, the character first appeared in The Invincible Iron Man #55.",
    image: "./image/thanos.jpg"
}]

var active = 0;
var clickStatus = {
    click: false,
    functionCall: false
};
var clickTimer = false;
const container = document.querySelector('.container')

function createSection(id = null, ...args) {
    var className = [...args];

    var section = document.createElement("section")
    section.classList.add(...className)
    section.id = id

    return section;
}

function createDiv(id = null, ...args) {
    var className = [...args];

    var div = document.createElement("div")
    div.classList.add(...className)
    div.id = id


    return div;
}

function createUList(id = null, ...args) {
    var className = [...args]

    var list = document.createElement('ul')

    list.classList.add(...className);
    list.id = id

    return list
}

function createList(id = null, ...args) {
    var className = [...args]

    var list = document.createElement('li')

    list.classList.add(...className);
    list.id = id

    return list
}

function createHeading(heading, id = null, text, ...args) {
    var className = [...args]

    var heading = document.createElement(heading)

    heading.classList.add(...className)
    heading.id = id
    heading.innerHTML = text


    return heading
}

function createPara(id = null, text, ...args) {
    var className = [...args]

    var para = document.createElement("p")

    para.classList.add(...className);
    para.id = id
    para.innerHTML = text

    return para
}


function createTitle(title, idx, ...args) {
    var tc = ["title-container"]
    var lw = ["letter-wrapper"]
    var t = ["title"]
    var titleArr = title.split(' ')

    var TitleContainer = document.createElement('div')
    TitleContainer.classList.add(...tc)
    TitleContainer.id = "title-container-" + idx

    titleArr.map((el) => {
        var letterWrapper = document.createElement('div')
        letterWrapper.classList.add(...lw)

        var title = document.createElement('span')
        title.classList.add(...t)
        title.innerHTML = el

        letterWrapper.appendChild(title);
        TitleContainer.appendChild(letterWrapper)
    })

    return TitleContainer
}

function createButton(id = null, text = "", ...args) {
    var className = [...args]

    var btn = document.createElement("a")

    btn.classList.add(...className);
    btn.id = id
    btn.innerHTML = text

    return btn
}


function removeClass(e, c) {
    document.getElementById(e).classList.remove(c)
}

function addClass(e, c) {
    document.getElementById(e).classList.add(c)
}

function setId(e, id) {
    e.id = "id"
}

function addListClass(id, el, className) {
    var test = document.getElementById(id);
    var testArr = [...test.getElementsByTagName(el)]

    testArr.map((e) => {
        e.classList.add(className)
    })
}

function removeListClass(id, el, className) {
    var test = document.getElementById(id);
    var testArr = [...test.getElementsByTagName(el)]

    testArr.map((e) => {
        e.classList.remove(className)
    })
}

function hidePrev(active) {
    var copy = $(".team-list li").first();
    copy.addClass("animate")
    setTimeout(() => {
        $(".team-list li").last().after(copy);
    }, 1000);
    setTimeout(() => {
        copy.removeClass("animate")
    }, 2000);
    $("#member-" + active).removeClass("active")
    $("#member-" + active + " ~ div").removeClass("active-ne")
    removeListClass("title-container-" + active, "span", "active-title")
    removeClass("p-" + active, "active-role")
    removeClass("pd-" + active, "active-description")
}

function showNext(active) {
    $("#member-" + active + " ~ div").addClass("active-ne")
    $("#member-" + active).addClass("active")    
    addListClass("title-container-" + active, "span", "active-title")
    addClass("p-" + active, "active-role")
    addClass("pd-" + active, "active-description")
}

function counter() {
    var counterc = ["counter"]
    var numberc = ["counter-num"]

    var counter = document.createElement('div')
    counter.classList.add(...counterc);

    var number = document.createElement('p')
    number.classList.add(...numberc);
    number.innerHTML = active.toString() + 1 + " / " + "0" + avengers.length.toString();
    number.id = "c-c"

    counter.appendChild(number)

    return counter
}

function updateSlide(active) {
    var counter = document.getElementById("c-c");
    var a = active;
    var length = avengers.length
    
    counter.innerHTML = 0 + a.toString() + " / " + "0" + length.toString()
}

function scroll() {
    window.addEventListener("wheel", e => {
        var previousActive = active;
        clickStatus.click = true;
        if (!clickStatus.functionCall) {
            const delta = e.detail ? e.detail * (-120) : e.wheelDelta;
            if (delta < 0 || delta > 0) {
                hidePrev(active)
                active++
                if (active > avengers.length - 1)
                    active = 0
                showNext(active)
                updateSlide(active + 1)
            }
            clickStatus.functionCall = true;
        }
        window.clearInterval(clickTimer);
        clickTimer = window.setTimeout(function () {
            clickStatus.wheeling = false;
            clickStatus.functionCall = false;
        }, 1000);
    });
}

function click(next) {
    next.addEventListener("click", e => {
        var previousActive = active;
        clickStatus.click = true;
        if (!clickStatus.functionCall) {
            const delta = e.detail ? e.detail * (-120) : e.wheelDelta;
            if (delta < 0 || delta > 0) {
                hidePrev(active)
                active++
                if (active > avengers.length - 1)
                    active = 0
                showNext(active)
                updateSlide(active + 1)
            }
            clickStatus.functionCall = true;
        }
        window.clearInterval(clickTimer);
        clickTimer = window.setTimeout(function () {
            clickStatus.click = false;
            clickStatus.functionCall = false;
        }, 1000);
    });
}

function renderTeamInfo() {
    var div = document.querySelector(".div-outer")
    var div2 = createDiv(null, "wrap-name")
    var div3 = createDiv(null, "wrap-role")
    var div4 = createDiv(null, "wrap-description")

    avengers.map((e, idx) => {
        var tc = createTitle(e.name, idx)
        var role = createPara("p-" + idx, e.role, "role")
        var description = createPara("pd-" + idx, e.description, "description")

        div2.appendChild(tc)
        div3.appendChild(role)
        div4.appendChild(description)
    })

    div.appendChild(div2)
    div.appendChild(div3)
    div.appendChild(div4)
}

function renderTeam() {
    var teamList = document.querySelector("#t-l")

    avengers.map((e, idx) => {

        var li = createList("m-c", "member", "h-100"),
            outer = createDiv(null, "member-outer", "w-100"),
            secondOuter = createDiv(null, "info-outer", "w-100"),
            imageHolder = createDiv("member-" + idx, "image-container", "w-100"),
            divdiv = createDiv(null, "divide", "w-100"),
            name = createHeading("h2", "heading-" + idx, e.name, "member-name", "m-0"),
            role = createPara(null, e.role, "member-role", "m-0");

        imageHolder.style.backgroundImage = "url(" + e.image + ")"

        outer.appendChild(imageHolder)
        outer.appendChild(divdiv)
        secondOuter.appendChild(name)
        secondOuter.appendChild(role)
        outer.appendChild(secondOuter)

        li.appendChild(outer)
        li.id = "mc-" + idx

        teamList.appendChild(li)
    })
}

function render() {
    var sectionImage = createSection("s-img", "section-image", "h-100");
    var sectionInfo = createSection("s-inf", "section-info", "center", "h-100");
    var listContainer = createDiv("l-c", "list-container", "w-100");
    var teamList = createUList("t-l", "team-list", "m-0", "pd-0", "h-100")
    var divOuter = createDiv("d-o", "div-outer");
    var btn = createButton("btn-id", "&#8250;", "btn", "center")
    var avengersTitle = createHeading("h3", "a-t", "Avengers", "rotate-title")
    listContainer.appendChild(teamList)
    sectionImage.appendChild(listContainer);
    sectionImage.appendChild(avengersTitle)
    sectionImage.appendChild(counter())
    sectionInfo.appendChild(divOuter);
    sectionInfo.appendChild(btn)

    container.appendChild(sectionImage);
    container.appendChild(sectionInfo);
    renderTeam()
    renderTeamInfo()
    window.addEventListener('load', function () {
        showNext(active)
        $("#member-" + active).addClass("active")
        scroll()
        var next = document.querySelector("#btn-id")
        click(next)
    });
}

render();