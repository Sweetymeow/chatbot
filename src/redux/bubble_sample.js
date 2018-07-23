const imgBub0 = {
  stepId: 0,
  bubType: "IMAGE_BUBBLE",
  nextStepId: 1,
  isGoNextAuto: false,
  options: [],
  bubContent: {
    imgSrc: "../res/Gopher.png",
    imgName: "Gppher"
  }
};

const textBub1 = {
  stepId: 1,
  bubType: "TEXT_BUBBLE",
  nextStepId: 2,
  isGoNextAuto: false,
  options: [],
  delayTimer: 500,
  bubContent: {
    text: "My name is Juan!!!. I am a UX/UI designer currently working at SAP.",
    html: "My name is <s>Juan</s>. I am a <s>UX / UI designer</s> currently working at <s className='underline'>SAP</s>."
  }
};

const textBub2 = {
  stepId: 2,
  bubType: "TEXT_BUBBLE",
  nextStepId: 3,
  isGoNextAuto: false,
  options: [],
  delayTimer: 1000,
  bubContent: {
    text: "Thanks for your interest in my portfolio! $$ May I ask your purpose of visiting today? :)",
    html: "Thanks for your interest in my portfolio! <s>May I ask your purpose of visiting today? :)</s>"
  }
};

const btnBub3 = {
  stepId: 3,
  bubType: "BUTTONGROUP_BUBBLE",
  isGoNextAuto: false,
  nextStepId: 4,
  label: "Choose an option",
  options: [{
    opId: 0,
    opText: "Recruiting Designer",
    opVal: "RECRUITER",
    nextStepId: 4
  },
  {
    opId: 1,
    opText: "Just Wander Around",
    opVal: "VIEWER",
    nextStepId: 5
  }],
  bubContent: {}
};

// 3 -> Recruiting Designer
const textBub4 = {
  stepId: 4,
  bubType: "TEXT_BUBBLE",
  nextStepId: 6,
  isGoNextAuto: true,
  delayTimer: 500,
  options: [],
  bubContent: {
    text: "Nice to e-meet you! 😃 Here is my resume.",
    html: "Nice to e-meet you! &#x1F601; Here is my resume."
  } // &#128513;
};// https://www.quackit.com/character_sets/emoji/emoji_v3.0/unicode_emoji_v3.0_characters_smileys_and_people.cfm

// 3 -> Just Wander Around
const textBub5 = {
  stepId: 5,
  bubType: "TEXT_BUBBLE",
  nextStepId: 11,
  isGoNextAuto: true,
  options: [],
  delayTimer: 500,
  bubContent: {
    text: "Nice to e-meet you! Hope you are doing well today! 😃",
    html: "Nice to e-meet you! Hope you are doing well today! 😃"
  }
}; // -> 11

const btnBub6 = {
  stepId: 6,
  label: "",
  bubType: "BUTTONGROUP_BUBBLE",
  isGoNextAuto: false,
  nextStepId: 7,
  delayTimer: 2000,
  options: [{
    opId: 0,
    opText: "Download CV",
    opVal: "Download",
    opImage: "../res/DOWNLOAD_CV.svg",
    opLink: "/static/media/bg_c1.b34cce03.svg",
    nextStepId: 7
  }],
  bubContent: {}
};

const textBub7 = {
  stepId: 7,
  bubType: "TEXT_BUBBLE",
  nextStepId: 8,
  isGoNextAuto: true,
  options: [],
  delayTimer: 1500,
  bubContent: {
    text: "I have been a pretty hands-on UX/UI designer for 3+ years on both B2C and B2B areas. The projects include both release and concept work that cross many industries such as medical, marketing, sales, utility and etc… Before I start to give you a guide, you need a password to access as all my projects are signed with NDA.",
    html: "I have been a pretty hands-on UX/UI designer for <s>3+ years</s> on both <s>B2C</s> and <s>B2B</s> areas. The projects include both release and concept work that cross many industries such as <s>medical, marketing, sales, utility and etc…</s> Before I start to give you a guide, you need a password to access as all my projects are signed with NDA."
  } // &#128513;
};

const inputBub8 = {
  stepId: 8,
  bubType: "INPUTPW_BUBBLE",
  label: "Type the Password",
  isGoNextAuto: false,
  nextStepId: 9,
  delayTimer: 1000,
  options: [{
    opId: 0,
    opRequest: 'ok',
    nextStepId: 9
  }],
  bubContent: {}
};

const textBub9 = {
  stepId: 9,
  bubType: "TEXT_BUBBLE",
  nextStepId: 10,
  isGoNextAuto: true,
  options: [],
  delayTimer: 500,
  bubContent: {
    text: "Here are my top 3 favorite projects. You will go to project page by click “View Project”. Hope you like my portfolio, enjoy! ☺️",
    html: "Here are my top 3 favorite projects. You will go to project page by click “View Project”. Hope you like my portfolio, enjoy! &#128513;"
  } // &#128513;
};

const cardsBub10 = {
  stepId: 10,
  bubType: "CARDS_BUBBLE",
  isGoNextAuto: false,
  nextStepId: -1,
  delayTimer: 1000,
  options: [{
    opId: 0,
    opTitle: "Project One",
    opVal: "proj1",
    opImage: "Project_Image_1",
    opLink: "http://wenwebdz.com/wendywen/",
    opLabels: ["#B2B", "#Marketing"],
    opContent: "Lorem ipsum vitae inceptos luctus vel urna Nam congue laoreet vestibulum arcu. Vitae sed massa quam. Sem ipsum laoreet lorem, rutrum, tincidunt. Vitae sed massa quam, tincidunt."
  }, {
    opId: 1,
    opTitle: "Project Two",
    opVal: "proj2",
    opImage: "Project_Image_2",
    opLink: "http://wenwebdz.com/wendywen/portfolio-sapviz.html",
    opLabels: ["#B2B", "#Marketing"],
    opContent: "Lorem ipsum vitae inceptos luctus vel urna Nam congue laoreet vestibulum arcu. Vitae sed massa quam. Sem ipsum laoreet lorem, rutrum, tincidunt. Vitae sed massa quam, tincidunt."
  }, {
    opId: 2,
    opTitle: "Project Three",
    opVal: "proj3",
    opImage: "Project_Image_3",
    opLink: "http://wenwebdz.com/wendywen/portfolio-hengyue.html",
    opLabels: ["#B2B", "#Marketing"],
    opContent: "Lorem ipsum vitae inceptos luctus vel urna Nam congue laoreet vestibulum arcu. Vitae sed massa quam. Sem ipsum laoreet lorem, rutrum, tincidunt. Vitae sed massa quam, tincidunt."
  }],
  bubContent: {}
};

const textBub11 = {
  stepId: 11,
  bubType: "TEXT_BUBBLE",
  nextStepId: 12,
  isGoNextAuto: true,
  options: [],
  delayTimer: 500,
  bubContent: {
    text: "Since all my projects are signed with NDA , and you are not recruiting people, I’m afraid I can’t give you a password to access… $$ BUT, we still can talk continually! $$ What do you want to know me more?",
    html: "Since all my projects are signed with NDA , and you are not recruiting people, I’m afraid I can’t give you a password to access… $$ BUT, we still can talk continually! $$ What do you want to know me more?"
  }
};

const btnBub12 = {
  stepId: 12,
  bubType: "BUTTONGROUP_BUBBLE",
  isGoNextAuto: false,
  nextStepId: 13,
  delayTimer: 1000,
  options: [{
    opId: 0,
    opText: "My background",
    opVal: "background",
    nextStepId: 13
  },
  {
    opId: 1,
    opText: "My hobbies",
    opVal: "hobbies",
    nextStepId: 14
  }],
  bubContent: {}
};

export { imgBub0, textBub1, textBub2, btnBub3, textBub4, textBub5, btnBub6, textBub7, inputBub8, textBub9, cardsBub10, textBub11, btnBub12 };
