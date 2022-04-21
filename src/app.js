// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

function createCard() {
  const contact = getContactInfo()
  const allContacts = document.querySelector('#display_all_contacts') 
  const singleContacts = document.querySelector('#display_single_contact') 

  for (const [key, value] of Object.entries(contact)) {
    const card = document.createElement('div'); 
    const info = {
      name: value[0],
      phone: value[1],
      image: value[2],
      email: value[3],
      ID: value[4]
    }
    allContacts.push(info)
  }
}

createCard(contactsList)

// function getContactInfo() {
//   for (let i = 0; i < contactsList.length; i++) {
//     const contact = contactsList[i] 
//     return contact;
//   }
// }

