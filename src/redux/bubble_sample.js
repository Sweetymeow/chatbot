const imgBub = {
  stepId: 0,
  bubType: "IMAGE",
  nextStepId: 1,
  requestClick: false,
  opionts: [],
  bubContent: {
    img_src: "../res/Gopher.png"
  }
};

const textBub = {
  stepId: 1,
  bubType: "TEXT",
  nextStepId: 2,
  requestClick: false,
  opionts: [],
  bubContent: {
    text: "My name is Juan. I am a UX/UI designer currently working at SAP.",
    html: "My name is <s>Juan</s>. I am a <s>UX / UI designer</s> currently working at <s className='underline'>SAP</s>."
  }
};

const btnBub = {
  stepId: 2,
  bubType: "BUTTON_GROUP",
  requestClick: true,
  nextStepId: 3,
  opionts: [{
    op_id: 0,
    op_text: "Recruiting Designer",
    op_val: "RECRUITER"
  }, {
    op_id: 1,
    op_text: "Just Wander Around",
    op_val: "VIEWER"
  }],
  bubContent: {}
};

export { imgBub, textBub, btnBub };
