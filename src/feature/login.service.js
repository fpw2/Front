const userLogin = async (userInfo) => {
    const result = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
      });
    const auth = await result.json()
    return auth
}

export { userLogin }