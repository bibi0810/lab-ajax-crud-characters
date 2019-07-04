class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister() {
    const id = document.getElementById("searchId").value;

    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister() {
    const name = document.getElementById("nameId").value;
    const occupation = document.getElementById("occupationId").value;
    const weapon = document.getElementById("weaponId").value;
    const field = document.getElementById("fieldId").checked;

    axios
      .post(`${this.BASE_URL}/characters`, { name, occupation, weapon, field })
      .then(response => {
        console.log(response);
        const { name, occupation, weapon, field } = response.data;
        document.getElementById("nameId").innerText = name;
        document.getElementById("occupationId").innerText = occupation;
        document.getElementById("weaponId").innerText = weapon;
        document.getElementById("fieldId").checked = field;
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateOneRegister() {
    const currentId = document.getElementById("editId").value;
    const name = document.getElementById("name2Id").value;
    const occupation = document.getElementById("occupation2Id").value;
    const weapon = document.getElementById("weapon2Id").value;
    const field = document.getElementById("field2Id").checked;

    axios
      .put(`${this.BASE_URL}/characters/${currentId}`, {
        name,
        occupation,
        weapon,
        field
      })
      .then(response => {
        console.log(response.data);
        this.getFullList();
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteOneRegister() {
    const currentId = document.getElementById("deleteElement").value;

    axios
      .delete(`${this.BASE_URL}/characters/${currentId}`)
      .then(response => {
        console.log(response.data);
        this.getFullList();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
