
//DO NOT USE INSPECT TO FIGURE THIS OUT PLEASE
const secretCode = document.querySelector("#secretCode");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  const enteredCode = secretCode.value.trim();

  if (enteredCode === "uoiaoo") {

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

      <p>November 13, 1973</p>
      <p>My sister has been talking walks at night. Weird.</p>
    `;

    const secretLink = document.querySelector("#secretLink");

    secretLink.addEventListener("click", (event) => {
      event.preventDefault();

      document.body.innerHTML = `
        <h1>GOODBYE</h1>

        <p>You shouldn't have come here</p>

        <p>During evening, authorities transferred handwritten observations; forensic records remained incomplete.</p>

        <p>Archived record numbers were listed separately: 1 9 7 and 3.</p>

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

          if (answer === "DEATH OF 1973") {

            document.body.innerHTML = `
              <h1>CONFIDENTIAL CASE FILE</h1>
              <p>ARCHIVAL DIVISION — 1965</p>

              <img src="https://i.imgur.com/lMJHG0D.jpeg" id="caseImage">

              <p>CHARLOTTE'S DEATH 1973</p>
              <p>Charlotte had been brutally ███████ ██ █████ about █ times</p>
              <p>Authorities discovered that her body was ████ ██ pieces and had been mangled.</p>
              <p>MISSING REPORT</p>
              <p>Charlotte had gone missing during November 14, 1973.</p>
              <p>Police held a missing person investigation 2 days after the report</p>
              <p>No trace of Charlotte was found and was called</p>
              <p>51 days after the investigation was called, only then was Charlotte's body found</p>
              <p>She was found ██ miles away from her house, and was deceased in an abandoned house located at ██ ████████ ██.</p>
              <p>Forensics revealed that she had been deceased for 53 days, revealing that she was dead the day she went missing.</p>

              <h1>WHO WAS KILLED</h1>
              <input type="text" id="sisterAnswer" class="sisterAnswer">
            `;

            const sisterAnswer = document.querySelector("#sisterAnswer");

            sisterAnswer.addEventListener("keydown", (event) => {
              if (event.key === "Enter") {

                const answer = sisterAnswer.value.trim().toUpperCase();

                if (answer === "SISTER") {
                  document.body.innerHTML = `
              <h1>INTERVIEW #1</h1>
              <p>Charlotte's mother was brought into an interrogation room</p>
              <img src="https://i.redd.it/cevawuhbgz9g1.jpeg" id="motherImage">
              <p><strong>INTERVIEWER:</strong> Thank you for coming in. We just have a few questions regarding Charlotte's disappearance.</p>

<p><strong>MOTHER:</strong> Of course. I just want to know where she is.</p>

<p><strong>INTERVIEWER:</strong> Let's start with November 14. Where were you that evening?</p>

<p><strong>MOTHER:</strong> I was at a gas station. I needed to pick something up before heading home.</p>

<p><strong>INTERVIEWER:</strong> Do you remember what time?</p>

<p><strong>MOTHER:</strong> Around 8:30pm.</p>

<p><strong>INTERVIEWER:</strong> And what exactly did you purchase?</p>

<p><strong>MOTHER:</strong> A pack of cigarettes..</p>

<p><strong>INTERVIEWER:</strong> Did you notice anyone else inside the station?</p>

<p><strong>MOTHER:</strong> There was a man near the entrance.</p>

<p><strong>INTERVIEWER:</strong> Did you speak to him?</p>

<p><strong>MOTHER:</strong> No.</p>

<p><strong>INTERVIEWER:</strong> You don't think so?</p>

<p><strong>MOTHER:</strong> Yes.</p>

<p><strong>INTERVIEWER:</strong> I see. Now, when was the last time you saw Charlotte?</p>

<p><strong>MOTHER:</strong> That morning. She said she was going out for a walk.</p>

<p><strong>INTERVIEWER:</strong> Did she mention where she was going?</p>

<p><strong>MOTHER:</strong> No. She said. Uh, something about a walk.</p>

<p><strong>INTERVIEWER:</strong> Was anything unusual about her behaviour?</p>

<p><strong>MOTHER:</strong> No.</p>

<p><strong>INTERVIEWER:</strong> One last question. Did you notice anything unusual on your way home that evening?</p>

<p><strong>MOTHER:</strong> No. Nothing I can remember.</p>

<p><strong>INTERVIEWER:</strong> Alright. That will be all for today.</p>

<p><strong>[END OF TRANSCRIPT]</strong></p>
<button id="continueBtn">CONTINUE</button>
              `;
                 const continueBtn = document.querySelector("#continueBtn");
            continueBtn.addEventListener("click", () => {
            document.body.innerHTML = `
            <h1>INTERVIEW #2</h1>`
            });
                } else {
                  console.log("Incorrect answer!");
                }

              }
            });

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
