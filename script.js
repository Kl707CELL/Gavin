
const secretCode = document.querySelector("#secretCode");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  const enteredCode = secretCode.value.trim();

  if (enteredCode === "uoiao") {

    document.body.innerHTML = `
      <h1>Diary</h1>

      <p>October 17, 1973</p>
      <p>I dug deeper into coding and realized that I can make a secret website for my diary!</p>

      <p>October 18, 1973</p>
      <p>My mom brought me cookies while I was on my website today! She had a bruise on her eye for some reason though.</p>

      <p>October 24, 1973</p>
      <p>My dad grounded me so I couldn't write anything lately. But I'm glad to be able to code again!</p>

      <p>October 25, 1973</p>
      <p>My mom and dad wont stop arguing about money stuff. They don't know that I can make money with my website haha!</p>

      <p>October 30, 1973</p>
      <p>My dad hit me and grounded me again. I wish I could keep writing in this diary everyday.</p>

      <p>November 1, 1973</p>
      <p>I was really excited to write today because it marks the day of a new month! A new month means more time to improve my coding skills!</p>

      <p>November 1, 1973</p>
      <p>My dad is here to write something! Hello future Gavin, I love you so much. From dad.</p>

      <p>November 2, 1973</p>
      <p>Dad said he was sorry about what he did to mom yesterday. He told me not to tell anyone about our arguments because people wouldn't understand. Mom hasn't really talked to me today. I think I'll just work on my website.</p>

      <p>November 3, 1973</p>
      <p>Me and my family played monopoly today. I totally crushed everyone! Dad didn't seem to happy about that.</p>

      <p>November 6, 1973</p>
      <p>I hate my life.</p>

      <p>November 12, 1973</p>
      <p>My mom and dad are fighting <a href="#" id="secretLink">a</a></p>
    `;

    const secretLink = document.querySelector("#secretLink");

    secretLink.addEventListener("click", (event) => {
      event.preventDefault();

      document.body.innerHTML = `
        <h1>GOODBYE</h1>

        <p>You shouldn't have come here</p>

        <p>During evening, authorities transferred handwritten observations; forensic records remained incomplete.</p>

        <p>Archived record numbers were listed separately: 1 9 6 and 5.</p>

        <p>
          01:01<br>
          01:02<br>
          01:03<br>
          01:04<br>
          01:05<br>
          01:06<br>
          01:07<br><br>
          02:07<br>
          02:08<br>
          02:09<br>
          02:11
        </p>

        <input
          type="text"
          id="hiddenAnswer"
          class="hidden-answer"
          autocomplete="off"
        >
      `;

      const hiddenAnswer = document.querySelector("#hiddenAnswer");

      hiddenAnswer.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {

          const answer = hiddenAnswer.value.trim().toUpperCase();

          if (answer === "DEATH OF 1965") {

            document.body.innerHTML = `
              <h1>CONFIDENTIAL CASE FILE</h1>
              <p>ARCHIVAL DIVISION — 1965</p>
            
            <img src="https://i.imgur.com/lMJHG0D.jpeg" id="caseImage">
            
            <p>CHARLOTTE'S DEATH 1965</p>
            
            
            `;

          } else {
            console.log("Incorrect answer!");
          }
        }
      });
    });

  } else {
    console.log("Incorrect password!");
  }
});
