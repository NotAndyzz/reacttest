function Async() {
  async function display() {
    for (let i = 1; i < 6; i++) {
      let first_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hello");
        }, i * 1000);
      });
      let data = await first_promise;

      console.log(data, i);
    }
  }

  return (
    <div>
      <h1>ASYNC AND AWAIT (open console)</h1>
      <button onClick={() => display()}>Click ME</button>
    </div>
  );
}

export default Async;
