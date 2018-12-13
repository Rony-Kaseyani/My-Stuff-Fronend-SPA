const auth = {
  authenticate() {
    fetch("/checkToken", {
      method: "GET",
      headers: {
        authorization: "bearer " + localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.status === 200) {
          console.log("logged in");
          window.location.href = "/dashboard";
        } else {
          new Error(res.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  logout() {
    console.log("logged out");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
};

export default auth;
