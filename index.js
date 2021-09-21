const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]
const [name, skills, scores] = student
const [htmlScore, cssScore, jsScore, reactScore] = scores
console.log(name, skills, scores)
console.log(jsScore, reactScore)

// Write a function called convertArrayToObject which can convert the array to a structured object.

const convertArrayToObject = array => {
  let final = array.map(arr => {
    const [name, skills, scores] = arr
    return {
      name,
      skills,
      scores,
    }
  })
  return final
}
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
]
console.log(convertArrayToObject(students),"convert")

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 	1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets

const original = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
}

const copied = JSON.parse(JSON.stringify(original))
copied.name = "mounika"
copied.skills.frontEnd.push({ skill: "BootStrap", level: 8 })
copied.skills.backEnd.push({ skill: "Express", level: 9 })
copied.skills.dataBase.push({ skill: "SQL", level: 8 })
copied.skills.dataScience.push("SQL")
console.log(copied, "COPIED")
console.log(original, "original")
console.log(
  Object.keys(original).length,
  " length of student original object keys "
)
console.log(
  Object.values(original).length,
  " length of student original object values "
)
console.log(
  Object.keys(original.skills).length,
  " length of  skills  object keys "
)
const keys = Object.keys(original)
console.log(keys.includes("graphicDesign"), "includs")

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
]

const signUp = user => {
  const found = users.some(
    el => el.username === user.username || el.email === user.email
  )
  if (!found) {
    users.push(user)
    alert("user updated successfully")
  } else {
    alert("user already exists")
  }
}

const newUser = {
  _id: "123",
  username: "sagar",
  email: "alex@sa.com",
  password: "24566",
  createdAt: "17/05/20121 9:00 AM",
  isLoggedIn: false,
}
// console.log(signUp(newUser))

const signIn = (email, password) => {
  const found = users.some(el => el.email === email && el.password === password)
  if (!found) {
    alert("signed in successfully")
  } else {
    alert("user doesnt exists")
  }
}
// console.log(
//   signIn({
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "17/05/2019 9:00 AM",
//     isLoggedIn: false,
//   })
// )
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
]
const averageRating = id => {
  const filter = products.filter(product => product["_id"] === id)[0].ratings
  let sum = 0

  for (var i = 0; i < filter.length; i++) {
    sum += filter[i].rate //don't forget to add the base
  }

  const avg = sum / filter.length
  return avg
}
console.log(averageRating("eedfcf"))

document.getElementById("app").innerHTML = `
<div id="parent" >







</div>
`
