// Using Typewriter to animate words on the top of the page
const txtAnimate = document.querySelector("h1")
new Typewriter(txtAnimate)
  .changeDelay(45)
  .typeString("Smalls steps everyday")
  .pauseFor(150)
  .typeString("<br> can have a big impact.")
  .pauseFor(300)
  .typeString('<br><span style="color:#ed5d34">Act now.</span>')
  .start()



// Add dynamically a new card
const cardContainer = document.querySelector(".card-container")

function createDivWithClass(classToAdd) {
  const element = document.createElement("div")
  return addNClasses(element, classToAdd)
}
function createElementWithText(element, text) {
  const item = document.createElement(element)
  item.textContent = text
  return item
}
function createImageWithSrc(source) {
  const img = document.createElement("img")
  img.src = source
  return img
}

function addCategory(category, element) {
  const icon = document.createElement("i")
  if (category === "food") {
    element.append(createImageWithSrc("meal.jpg"))
    return addNClasses(icon, "fas fa-utensils card-front-category-i")
  } else if (category === "energy") {
    element.append(createImageWithSrc("energy.jpg"))
    return addNClasses(icon, "fa-solid fa-bolt card-front-category-i")
  } else {
    element.append(createImageWithSrc("mobility.jpg"))
    return addNClasses(icon, "fa fa-plane card-front-category-i")
  }
}

function createIconWithClass(classToAdd) {
  const icon = document.createElement("i")
  return addNClasses(icon, classToAdd)
}

function addNClasses(element, classesToAdd) {
  if (classesToAdd.indexOf(" ") !== -1) {
    const splittedClasses = classesToAdd.split(" ")
    splittedClasses.forEach(item => {
      element.classList.add(item)
    })
  } else {
    element.classList.add(classesToAdd)
  }
  return element
}

// A simple function creates the whole HTML structure with the data provided
// it makes creating a new Card easy
function addCard(difficulty, category, imgBack, infoTitleTxt, infoBodyTxt1, infoBodyTxt2, cardFooterTxt = "") {

  const cardWrapper = createDivWithClass("card-wrapper")
  cardWrapper.dataset.identifier = infoTitleTxt.replaceAll(" ", "-")
  const cardWithDifficulty = createDivWithClass("card " + difficulty)
  
  const cardFront = createDivWithClass("card-front")
  cardFront.append(createElementWithText("h3", difficulty))
  
  
  cardFront.append(addCategory(category, cardFront))
  cardFront.append(createIconWithClass("arrow-icon fas fa-arrow-right"))
  cardWithDifficulty.append(cardFront)
  
  const cardBack = createDivWithClass("card-back")
  cardBack.append(createImageWithSrc(imgBack))
  const infoTitle = createDivWithClass("info-title")
  infoTitle.append(createElementWithText("h2", infoTitleTxt))
  infoTitle.append(document.createElement("hr"))
  cardBack.append(infoTitle)

  const infoBody = createDivWithClass("info-body")
  const inline = createDivWithClass("inline")
  inline.append(createIconWithClass("fa-solid fa-check"))
  inline.append(createElementWithText("p", infoBodyTxt1))
  infoBody.append(inline)
  
  const inline2 = createDivWithClass("inline")
  inline2.append(createIconWithClass("fa-solid fa-check"))
  inline2.append(createElementWithText("p", infoBodyTxt2))
  infoBody.append(inline2)
  cardBack.append(infoBody)

  
  const footerBtn = createDivWithClass("footer-btn")
  
  if (cardFooterTxt) {
    const cardFooter = createDivWithClass("card-footer-btn modal-trigger")
    cardFooter.append(createElementWithText("button", cardFooterTxt))
    footerBtn.append(cardFooter)
  }

  footerBtn.insertAdjacentHTML("beforeend", '<div class="follow-container"><a class="cta"><span>Follow</span><span><svg width="33px" height="21px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path><path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path><path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path></g></svg></span></a></div>')
  cardBack.append(footerBtn)

  cardWithDifficulty.append(cardBack)
  cardWrapper.append(cardWithDifficulty)
  cardContainer.append(cardWrapper);
}
addCard("easy", "food", "meat2.jpg", "Reduce meat consumption", "Replace animal proteins", "Lentils, Tofu, Seitan", "More Info")
addCard("easy", "mobility", "drive.jpg", "Drive smoothly", "Throttle progressively", "Anticipate slows down")
addCard("easy", "energy", "electricity.jpg", "Reduce power use", "Turn off / unplug electronics you don't use", "Use multisockets to easily unplug several electronics")
addCard("easy", "mobility", "travel-local.jpg", "Travel Local", "Change your far-from-home next holiday by a local travel", "If you still want to travel far from home, stay longer and less often")
addCard("easy", "energy", "electronics.jpg", "Buy energy efficient Electronics", "Buy energy efficiency electronics", "Buy second-hand electronics")
addCard("easy", "food", "food-waste.jpg", "Reduce food waste", "Try to plan your purchases", "Find on the net recipes with the rest of the fridge")
addCard("easy", "energy", "water-usage.jpg", "Reduce water usage", "Take a shower instead of a bath or take shorter shower", "Install flow restrictors")




addCard("medium", "mobility", "drive.jpg", "Share your car", "Find an application of car sharing or visit car sharing websites to organise car sharing")

addCard("medium", "food", "eatlocal.jpg", "Eat locally", "Find online local producers or order online from your local producers")

addCard("hard", "mobility", "travel-local.jpg", "Only Travel local", "Only travel in your country or a neightboor country", "Take the public transport / car sharing to travel local")


// Using IntersectionObserver to make the second paragraph visible
const contentTitle = document.querySelector('.content-title') 
const changeWords = document.querySelector(".info-consumption p:nth-child(2)")
const box = document.querySelector(".box")

const threshold = .7
const options = {
  threshold
}

function makeVisible (entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > threshold) {
      box.classList.add("active")
      animation()
      document.querySelector(".earths").classList.add("active")
      setTimeout(() => changeWords.classList.add("active"), 3600)
      observer.unobserve(entry.target)
    }
  })
}
const observer = new IntersectionObserver(makeVisible, options)
observer.observe(contentTitle)


// Animate the number of planets
const numberPlanets = document.querySelector("#number-planets")
let intNumberPlanets = Number.parseInt(numberPlanets.textContent)
let timing = 80
let interval

function animation() {
  stop(interval)
  intNumberPlanets++
  numberPlanets.textContent = intNumberPlanets / 10
  numberPlanets.textContent = numberPlanets.textContent.padEnd(3, '.0')

  if (intNumberPlanets === 28) {
    return stop(interval)
  } else if (intNumberPlanets > 26) {
    changeTimer(350)
  } else if (intNumberPlanets > 24) {
    changeTimer(200)
  }
  interval = setInterval(animation, timing)
}

function changeTimer(newTiming) {
  timing = newTiming
}

function stop(interval) {
  return clearInterval(interval)
}

// Display personal challenges
const cards = document.querySelectorAll(".card")
const myChallenges = document.querySelector("#my-challenges")
const togglerSlider = document.querySelector(".toggler-slider")
let checkedmyChallenges = document.querySelector('.toggler-wrapper.style-8 input[type="checkbox"]')
let radLabelNoneInput = document.querySelector('.rad-label.none input')
const cardsWrapper = document.querySelectorAll(".card-wrapper")

myChallenges.addEventListener("click", () => {
  ToggleChallenges()
})
togglerSlider.addEventListener("click", (e) => {
  e.preventDefault()
  ToggleChallenges()
})

function ToggleChallenges() {
  if (!checkedmyChallenges.checked) {
    checkedmyChallenges.checked = true
    myChallenges.style.color = "white"
    DisplayPersonalChallenges()

  } else {
    uncheckedChallenge()
    RemovePersonal()
    RemoveHiddenItems()
    ResetAnimation(cardsWrapper)
    DisplayCorrectNofPages(cardsWrapper.length)
    category = undefined
  }
  FirstPageSelectedifCategoryChanged()
  radLabelNoneInput.checked = true
}


function uncheckedChallenge() {
  checkedmyChallenges.checked = false
  myChallenges.style.color = "rgb(153, 153, 153)"
  noChallenge.classList.remove("active")
  RemoveActive()
}
function RemoveActive() {
  cards.forEach(card => card.classList.remove("active"))
}

let category
const noChallenge = document.querySelector(".no-challenge")
const personalChallenges = []

function DisplayPersonalChallenges() {
  HideCards()
  RemoveActive()

  if (!localStorage.getItem(1)) {
    noChallenge.classList.add("active")
    DisplayCorrectNofPages(0)
    return
  }

  category = "personal"
  ResetAnimation(personalChallenges)
  
  personalChallenges.forEach(challenge => {
    DisplayItems(challenge, "personal", "hidden")
  })

  DisplayCorrectNofPages(localStorage.length - 1)
}


function DisplayTextFollowed() {
  let i = 1
  while (localStorage.getItem(i)) {
    const currentItem = document.querySelector(`[data-identifier = ${localStorage.getItem(i)}]`)

    personalChallenges.push(currentItem)
    ChangeTextToFollowed(currentItem)

    if (checkedmyChallenges.checked) {
      DisplayItems(currentItem, "show", "hidden")
    }

    i++
  }
}
DisplayTextFollowed()


function HideCards() {
  cardsWrapper.forEach(card => card.classList.remove("show"))
  cardsWrapper.forEach(card => card.classList.add("hidden"))
}
function RemoveHiddenItems() {
  cardsWrapper.forEach(card => card.classList.remove("hidden"))
}
function ChangeTextToFollowed(currentItem) {
  currentItem.querySelector(".cta span:nth-child(1)").textContent = "Followed !"
  currentItem.querySelector(".cta span:nth-child(1)").classList.add("followed")
}


function DisplayItems(element, ClassToAdd, ClassToRemove) {
  element.classList.add(ClassToAdd)
  element.offsetHeight
  element.classList.remove(ClassToRemove)
}

// Select a category (4)
const radLabelNone = document.querySelector(".rad-label.none input")
radLabelNone.addEventListener("click", () => {

  uncheckedChallenge()
  RemoveHiddenItems()
  RemovePersonal()
  ResetAnimation(cardsWrapper)

  noChallenge.classList.remove("active")
  category = undefined
  DisplayCorrectNofPages(cardsWrapper.length)
  FirstPageSelectedifCategoryChanged()
})


function RemovePersonal() {
  cardsWrapper.forEach(card => card.classList.remove("personal"))
}

function ResetAnimation(element) {
  element.forEach(card => card.classList.remove("show"))
  cardContainer.offsetHeight // Forces repaint to display the card animation
  element.forEach(card => card.classList.add("show"))
}


const radLabelEasy = document.querySelector(".rad-label.easy input")
const CardsEasy = document.querySelectorAll(".card.easy")
radLabelEasy.addEventListener("click", () => {

  SelectCategory(CardsEasy)
})

const radLabelMedium = document.querySelector(".rad-label.medium input")
const CardsMedium = document.querySelectorAll(".card.medium")
radLabelMedium.addEventListener("click", () => {

  SelectCategory(CardsMedium)
})

const radLabelHard = document.querySelector(".rad-label.hard input")
const CardsHard = document.querySelectorAll(".card.hard")
radLabelHard.addEventListener("click", () => {

  SelectCategory(CardsHard)
})


function SelectCategory(categorySelector) {
  uncheckedChallenge()
  HideCards()
  categorySelector.forEach(item => {
    item.parentNode.classList.remove("hidden")
  })
  category = categorySelector[0].classList[1]
  const parentCategorySelector = []

  categorySelector.forEach(selector => {
    parentCategorySelector.push(selector.parentNode)
  })

  noChallenge.classList.remove("active")

  RemovePersonal()
  ResetAnimation(parentCategorySelector)
  DisplayCorrectNofPages(categorySelector.length)
  FirstPageSelectedifCategoryChanged()
}

// Make cards active and animate follow button
const paths = document.querySelectorAll(".cta path")
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active")

    if (e.currentTarget.classList.contains("active")) {
      animateFollowBtn(e)
      setTimeout(removeAnimationFollowBtn, 2000)
    }
  })
})
function animateFollowBtn(e) {
  e.currentTarget.querySelectorAll(".cta path").forEach(path => path.classList.add("first-active"))
}
function removeAnimationFollowBtn() {
  paths.forEach(path => path.classList.remove("first-active"))
}


// Add the followed cards to the local storage
const followButtons = document.querySelectorAll(".cta")
const notification = document.querySelector("span.notification")
let intNotification = Number.parseInt(notification.textContent)
let localStorageNotifications = localStorage.getItem('notifications')
const notificationBanner = document.querySelector(".notification-banner")

followButtons.forEach(followButton => {
  followButton.addEventListener("click", (e) => {
    e.stopPropagation()
    
    if (followButton.querySelector("span").classList.contains("followed")) return
    
    if (localStorageNotifications) {
      localStorageNotifications = Number.parseInt(localStorageNotifications) + 1
      notification.textContent = localStorageNotifications
      localStorage.setItem('notifications', localStorageNotifications)
      
      localStorage.setItem(localStorageNotifications, e.currentTarget.closest(".card-wrapper").dataset.identifier)
    } else {
      notification.textContent = ++intNotification
      localStorage.setItem('notifications', intNotification)
      localStorage.setItem(intNotification, e.currentTarget.closest(".card-wrapper").dataset.identifier)
    }

    if (!notification.classList.contains("active")) {
      notification.classList.add("active")
    }

    if (!notificationBanner.classList.contains("active")) {
      notificationBanner.classList.add("active")
      setTimeout(removeNotificationBanner, 4000)
    }
    DisplayTextFollowed()
  })
})
function removeNotificationBanner() {
  notificationBanner.classList.remove("active")
}

if (localStorageNotifications) {
  notification.classList.add("active")
  notification.textContent = localStorageNotifications
}


// Display modal content
const modalContainer = document.querySelector(".modal-container")
const modalTriggers = document.querySelectorAll(".modal-trigger")

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    event.stopPropagation()
    modalContainer.classList.toggle("active")
  })
})


// Pagination. By default, 9 elements are displayed
let ITEMS_PER_PAGE = 9
const pagination = document.querySelector(".pagination")

function LimitItemsPerPage(total) {
  if (total > ITEMS_PER_PAGE) {
    for (let i = ITEMS_PER_PAGE; i < total; i++) {
      DisplayItems(cardsWrapper[i], "hidden", "show")
    }
  }
}

function DisplayCorrectNofPages(totalPages) {
  let numberPages = Math.ceil(totalPages / ITEMS_PER_PAGE)

  LimitItemsPerPage(totalPages)
  if (pagination.querySelectorAll("a").length === numberPages) return

  if (numberPages === 0) numberPages = 1
  RemoveAllLinks()
  
  const arrowRight = document.querySelector(".fa-solid.fa-angle-right")
  for (let i = 1; i < numberPages + 1; i++) {
    pagination.insertBefore(createElementWithText("a", i), arrowRight)
  }

  pagination.querySelector("a").classList.add("active")
  ClickablePages()
}

function RemoveAllLinks() {
  const links = pagination.querySelectorAll("a")
  links.forEach(link => link.remove())
}


function CreatePaginationStructure() {
  LimitItemsPerPage(cardsWrapper.length)
  const numberPages = Math.ceil(cardsWrapper.length / ITEMS_PER_PAGE)
  pagination.append(createIconWithClass("fa-solid fa-angle-left"))
  
  for (let i = 1; i < numberPages + 1; i++) {
    pagination.append(createElementWithText("a", i))
  }
  
  pagination.querySelector("a").classList.add("active")
  pagination.append(createIconWithClass("fa-solid fa-angle-right"))
}
CreatePaginationStructure()


function FirstPageSelectedifCategoryChanged() {
  const activeLinkPage = pagination.querySelector("a.active")
  if (activeLinkPage.textContent != 1 || currentPage !== 1) {
    activeLinkPage.classList.remove("active")
    pagination.querySelector("a").classList.add("active")
    currentPage = 1
  }
}


const arrowRight = document.querySelector(".fa-angle-right")
const arrowLeft = document.querySelector(".fa-angle-left")
let currentPage

arrowRight.addEventListener("click", () => {
  const currentActive = pagination.querySelector("a.active")
  currentPage = Number.parseInt(currentActive.textContent)

  const nextElement = currentActive?.nextElementSibling
  if (nextElement.nextElementSibling) {
    
    currentActive.classList.add("visited")
    addActivePage(nextElement, currentActive)
    GoTo(currentPage + 1)
    // pagination at the bottom of the page because of variable content - jump
    pagination.scrollIntoView(false)
  }
})

arrowLeft.addEventListener("click", () => {
  const currentActive = pagination.querySelector("a.active")
  currentPage = Number.parseInt(currentActive.textContent)

  const prevElement = currentActive?.previousElementSibling
  if (prevElement.previousElementSibling) {

    currentActive.classList.add("visited")
    addActivePage(prevElement, currentActive)
    GoTo(currentPage - 1)
    pagination.scrollIntoView(false)
  }
})

function ClickablePages() {
  const pages = pagination.querySelectorAll("a")
  pages.forEach(page => {
    page.addEventListener("click", (e) => {

      if (pages.length > 1) {
        const currentActive = pagination.querySelector("a.active")
        currentPage = Number.parseInt(e.currentTarget.textContent)

        currentActive.classList.add("visited")
        addActivePage(e.currentTarget, currentActive)
        GoTo(currentPage)
        pagination.scrollIntoView(false)
      }
    })
  })
}
ClickablePages()

function GoTo(page) {
  // first page
  if (page <= 1) {
    for (let i = 0; i < cardsWrapper.length; i++) {
      // if a card does not belong to "category" or "personal" that were selected
      if (category && category !== "personal" && !BelongsToSameCategory(i)) return
      if (checkedmyChallenges.checked && !BelongsToPersonalChallenges(i)) return

      if (i < ITEMS_PER_PAGE) {
        DisplayItems(cardsWrapper[i], "show", "hidden")
      } else {
        DisplayItems(cardsWrapper[i], "hidden", "show")
      } 
    }
  } else if (page >= Math.ceil(cardsWrapper.length / ITEMS_PER_PAGE)) {
    // last page
    for (let i = 0; i < cardsWrapper.length; i++) {
      if (category && category !== "personal" && !BelongsToSameCategory(i)) return
      if (checkedmyChallenges.checked && !BelongsToPersonalChallenges(i)) return

      if (i < cardsWrapper.length - (cardsWrapper.length % ITEMS_PER_PAGE)) {
        DisplayItems(cardsWrapper[i], "hidden", "show")
      } else {
        DisplayItems(cardsWrapper[i], "show", "hidden")
      } 
    }
  } else {
    for (let i = 0; i < cardsWrapper.length; i++) {
      if (i < (page - 1) * ITEMS_PER_PAGE) {
        DisplayItems(cardsWrapper[i], "hidden", "show")
      } else if (i > (page * ITEMS_PER_PAGE) - 1) {
        DisplayItems(cardsWrapper[i], "hidden", "show")
      } else {
        DisplayItems(cardsWrapper[i], "show", "hidden")
      }
    }
  }

  // Turns back cards if visiting the same page again
  const visitedActiveLink = pagination.querySelector("a.visited.active")

  if (visitedActiveLink) {
    const cardsWrapperShow = []
    cardsWrapper.forEach(card => {
      const activeShowedCard = card.querySelector(".show div.active")
      if (activeShowedCard) {
        cardsWrapperShow.push(activeShowedCard)
      }
    })
    RemoveActiveItem(cardsWrapperShow)
    visitedActiveLink.classList.remove("visited")
  }
}


function BelongsToSameCategory(i) {
  return cardsWrapper[i].querySelector(".card").classList.contains(category)
}
function BelongsToPersonalChallenges(i) {
  return cardsWrapper[i].querySelector(".card").parentNode.classList.contains("personal")
}

function RemoveActiveItem(cardsWrapperShow) {
  cardsWrapperShow.forEach(card => {
    card.offsetHeight
    card.classList.remove("active")
  })
}

function addActivePage(element, currentActive) {
  currentActive.classList.remove("active")
  element.classList.add("active")
}


// Footer animation infinite
const footerNext = document.querySelector(".fa-solid.fa-angle-right.control")
const footerPrev = document.querySelector(".fa-solid.fa-angle-left.control")
const sliderTexts = document.querySelectorAll(".slider .text")
const bullets = document.querySelectorAll(".bullets span")
const slider = document.querySelector(".slider")
const carousel = document.querySelector(".carousel")
let currentIndex = 0

footerPrev.addEventListener("click", () => {
  slider.prepend(slider.lastElementChild)
  slider.style.transform = "translate3d(-33.34%, 0px, 0px)"
  slider.style.transition = "none"
  slider.offsetHeight
  slider.style.transform = "translate3d(0px, 0px, 0px)"
  slider.style.transition = "transform 0.5s"
  currentIndex--
  SetActiveBullet()
})

footerNext.addEventListener("click", () => {
  slider.style.transform = "translate3d(-33.34%, 0px, 0px)"
  currentIndex++
  Transition()
  SetActiveBullet()
})

setInterval(AutoNext, 5000)

function AutoNext() {
  footerNext.click()
}

function SetActiveBullet() {
  if (currentIndex < 0) currentIndex = 2
  else if (currentIndex > 2) currentIndex = 0

  const currentActiveBullet = document.querySelector(".bullets .active")
  currentActiveBullet.classList.remove("active")
  bullets[currentIndex].classList.add("active")
}

function Transition() {
  slider.addEventListener("transitionend", () => {
    slider.appendChild(slider.firstElementChild)

    slider.style.transition = "none"
    slider.style.transform = "translate3d(0px, 0px, 0px)"
    slider.offsetHeight
    slider.style.transition = "transform 0.5s"
  }, {once: true})
}

// First loading with given width
function ResizingPagination() {
  DetermineItemsPerPage()
  if (noChallenge.classList.contains("active")) return


  // category selected or personal challenges ?
  const totalPages = document.querySelectorAll(".card."+ category).length
  || (checkedmyChallenges.checked ? localStorage.length - 1 : cardsWrapper.length)

  const currentActive = pagination.querySelector("a.active")
  currentPage = Number.parseInt(currentActive.textContent)


  DisplayCorrectNofPages(totalPages)
  GoTo(currentPage)
  RemoveActive()

  // if resizing changed the number of pages
  if (currentPage != pagination.querySelector("a.active").textContent) {
    const allLinks = pagination.querySelectorAll("a")
    pagination.querySelector("a.active").classList.remove("active")

    // if a page does not exist anymore but was selected
    if (!allLinks[currentPage - 1]) {
      currentPage = allLinks.length
    }
    allLinks[currentPage - 1].classList.add("active")
  }
}
// ResizingPagination()

// Adding a debounce to limit the number of calls
window.addEventListener('resize', Debounce(ResizingPagination, 300))


function DetermineItemsPerPage() {
  let clientW  = document.body.clientWidth

  if (clientW < 770) {
    ITEMS_PER_PAGE = 6
  } else if (clientW < 1230) {
    ITEMS_PER_PAGE = 8
  } else {
    ITEMS_PER_PAGE = 9
  }
}

function Debounce(fn, delay) {
  let timer = 0;
  return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
  }
}


console.info("%cIf you have any question / suggestion regarding this project, feel free to ask me : unam31@gmail.com", "color: #1fd12e")